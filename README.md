<div align="center">

<img src="https://raw.githubusercontent.com/nitroforge/NitroLauncher/main/logo.png" alt="Mario Kart Nitro" height="190" />

<img src="assets/banner.jpg" alt="Mario Kart Nitro launcher" width="100%" />

<br />

<img src="assets/stack.svg" alt="Python, JavaScript, HTML5, CSS3, VS Code, Git, GitHub, Windows" height="56" />

<br />

[![Latest release](https://img.shields.io/github/v/release/nitroforge/NitroLauncher?style=for-the-badge&color=f0561e&labelColor=161b22&label=Latest)](../../releases/latest)
[![Downloads](https://img.shields.io/github/downloads/nitroforge/NitroLauncher/total?style=for-the-badge&color=30363d&labelColor=161b22&label=Downloads)](../../releases)
[![Platform](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011-0078D6?style=for-the-badge&labelColor=161b22)](#what-you-need)
[![License](https://img.shields.io/badge/License-GPL--3.0-2ea44f?style=for-the-badge&labelColor=161b22)](LICENSE.txt)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=for-the-badge&labelColor=161b22&logo=discord&logoColor=white)](https://discord.gg/AhkHNPG65G)

### [Download the launcher](../../releases/latest) &nbsp;Â·&nbsp; [Get help on Discord](https://discord.gg/AhkHNPG65G)

</div>

<img src="assets/divider.svg" alt="" width="100%" />

## What it does

| | |
|---|---|
| **Play in one click** | Sets the mod up inside Dolphin's `Load/Riivolution` folder and starts the game. |
| **Keeps the mod current** | Syncs from [Nitropack](https://github.com/nitroforge/Nitropack) and downloads only files that changed. Every file is checked against its hash, and failed downloads retry on their own. |
| **Updates itself** | New launcher versions come from this repo's releases, are checked against a checksum, and replace the old exe. |
| **Mii editor** | Pick every part visually, with a live preview beside it. |
| **Performance mode** | One switch that starts Dolphin with settings tuned for speed. Your own Dolphin settings are not changed. |
| **My Stuff** | Drop your own files, like music, into a folder and the launcher puts them into the mod for you. |
| **16 languages** | Switch any time in Settings. |
| **Your saves stay yours** | The launcher never installs, replaces or deletes save data. |

<img src="assets/divider.svg" alt="" width="100%" />

## What you need

- Windows 10 or 11
- [Dolphin](https://dolphin-emu.org/) with Riivolution support
- Your own Mario Kart Wii disc image (ISO or WBFS). This project doesn't provide one and never will.

## Get started

1. Download `MarioKartNitro.exe` from the [Releases](../../releases/latest) page.
2. Run it and point it to `Dolphin.exe` and your game file.
3. Let it download the mod the first time.
4. Press **Play**.

Updates are checked every time the launcher opens.

<img src="assets/divider.svg" alt="" width="100%" />

## Where things come from

| What | Source | How it arrives |
|---|---|---|
| Mod files | [`Nitropack`](https://github.com/nitroforge/Nitropack) | Incremental, hash-checked sync |
| Launcher | [Latest release](../../releases/latest) | Prompt, then the exe is swapped and restarted |

## FAQ

<details>
<summary><b>Where does the launcher put the mod?</b></summary>

In Dolphin's own user folder, under `Load/Riivolution`. Nothing is installed anywhere else.
</details>

<details>
<summary><b>Will it touch my save files?</b></summary>

No. Save data under `riivolution/save` is never downloaded, replaced or deleted by the launcher. The game creates it on your PC the first time you play.
</details>

<details>
<summary><b>I get error 22005 when going online.</b></summary>

That error means the save profile belongs to a different console. Close Dolphin, then rename
`Dolphin\User\Load\Riivolution\riivolution\save\NitroWFC\RMCP\rksys.dat` to `rksys.dat.bak` (use `RMCE` for the US version) and start the game again.
A new save should be created from your normal Mario Kart Wii save. Only do this if you have the error: a working save has your progress in it.
</details>

<details>
<summary><b>The download failed or says GitHub isn't serving a file.</b></summary>

The launcher retries by itself. If it still fails, wait a few minutes and press Play again. Everything that already downloaded is kept.
</details>

<details>
<summary><b>Do you provide the game?</b></summary>

No. You need your own copy of Mario Kart Wii.
</details>

<img src="assets/divider.svg" alt="" width="100%" />

## License

GPL v3, see [LICENSE.txt](LICENSE.txt). Third-party parts and their licenses are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Community

Questions, bugs, or just want to chat? Come to the [Discord](https://discord.gg/AhkHNPG65G).

<sub>A project by <b>NitroForge</b>. Mario Kart Nitro is a fan project. It is not affiliated with or endorsed by Nintendo. Mario Kart and Wii are trademarks of Nintendo.</sub>
