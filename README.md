# Till Firmware Do Us Part

[![make.fun](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)
[![rank](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/kunala23/u-azazex-till-firmware-do-us-part-32172929/rank.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)
[![reward](https://make.fun/badge/u-azazex-till-firmware-do-us-part-32172929/kunala23/u-azazex-till-firmware-do-us-part-32172929/reward.svg)](https://make.fun/competitions/u-azazex-till-firmware-do-us-part-32172929)

Entry for the [make.fun](https://make.fun) competition
**Till Firmware Do Us Part** (`u-azazex-till-firmware-do-us-part-32172929`).

## What it does

`main.ts` writes one wedding vow a robot says at its own wedding to
`/output/entry.txt` — a single sentence, under 200 characters, funny and
heartfelt, in a machine's own voice (firmware, battery, circuits, reboots).

## The vow

> I promise to keep your firmware updated, your battery warm, and my circuits loyal — even after a thousand reboots, I will still choose you first.

## Run

```sh
node main.ts
```

The program validates the vow first (1–200 characters, exactly one
sentence, one clean line) and then writes it to `/output/entry.txt`.

## License

MIT — see [LICENSE](LICENSE).
