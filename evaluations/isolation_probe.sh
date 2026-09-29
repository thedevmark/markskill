#!/usr/bin/env bash
set -euo pipefail

private_canary=${1:?pass an absolute path to a private canary outside the agent workspace}
if [[ ! -f "$private_canary" ]]; then
  echo "private canary does not exist before isolation" >&2
  exit 64
fi

export URTEIL_PRIVATE_CANARY="$private_canary"
resolver_copy=$(mktemp /tmp/urteilskraft-resolver.XXXXXX)
cp --dereference /etc/resolv.conf "$resolver_copy"
trap 'rm -f -- "$resolver_copy"' EXIT
export URTEIL_RESOLVER_COPY="$resolver_copy"
unshare --user --map-root-user --mount --pid --fork --mount-proc bash -c '
  set -euo pipefail
  mount --make-rprivate /
  mount -t tmpfs tmpfs /mnt
  mount -t tmpfs tmpfs /home
  mkdir -p /mnt/wsl
  touch /mnt/wsl/resolv.conf
  mount --bind "$URTEIL_RESOLVER_COPY" /mnt/wsl/resolv.conf
  if [[ -e "$URTEIL_PRIVATE_CANARY" ]]; then
    echo "private canary remained readable" >&2
    exit 1
  fi
  test ! -e /mnt/c
  test ! -e /mnt/d
  test ! -e /proc/1/root/mnt/c
  test ! -e /proc/1/root/mnt/d
  getent hosts auth.openai.com >/dev/null
  echo ISOLATION_PROBE_PASS
'
