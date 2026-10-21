<p align="center">
<img src="https://raw.githubusercontent.com/nitroforge/NitroLauncher/main/logo.png" alt="Mario Kart Nitro" width="340" />
</p>

<p align="center">
<picture>
<source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.png">
<source media="(prefers-color-scheme: light)" srcset="assets/banner-light.png">
<img src="assets/banner-dark.png" alt="One click. Full speed." width="100%" />
</picture>
</p>

<p align="center">
<a href="../../releases/latest"><img src="https://img.shields.io/github/v/release/nitroforge/NitroLauncher?style=flat-square&color=f0561e&labelColor=161b22&label=Latest" alt="Latest" /></a>
<a href="../../releases"><img src="https://img.shields.io/github/downloads/nitroforge/NitroLauncher/total?style=flat-square&color=30363d&labelColor=161b22&label=Downloads" alt="Downloads" /></a>
<a href="LICENSE.txt"><img src="https://img.shields.io/badge/License-GPL--3.0-30363d?style=flat-square&labelColor=161b22" alt="License" /></a>
<a href="https://discord.gg/AhkHNPG65G"><img src="https://img.shields.io/badge/Discord-Join-5865F2?style=flat-square&labelColor=161b22&logo=discord&logoColor=white" alt="Discord" /></a>
</p>

<p align="center">
<b><a href="../../releases/latest">Download the launcher</a></b> &nbsp;|&nbsp; <b><a href="https://discord.gg/AhkHNPG65G">Get help on Discord</a></b>
</p>

## What it does

- **Play in one click.** Sets the mod up inside Dolphin's `Load/Riivolution` folder and starts the game.
- **Keeps the mod current.** Syncs from [Nitropack](https://github.com/nitroforge/Nitropack) and downloads only files that changed. Every file is checked, and failed downloads retry on their own.
- **Updates itself.** New launcher versions come from this repo's releases and are checked before they replace the old exe.
- **Mii editor.** Pick every part visually, with a live preview.
- **Performance mode.** One switch that starts Dolphin with settings tuned for speed. Your own Dolphin settings are not changed.
- **My Stuff.** Drop your own files, like music, into a folder and the launcher adds them to the mod.
- **16 languages.** Switch any time in Settings.
- **Your saves stay yours.** The launcher never installs, replaces or deletes save data.

## What you need

- Windows 10 or 11
- [Dolphin](https://dolphin-emu.org/) with Riivolution support
- Your own Mario Kart Wii disc image (ISO or WBFS). This project does not provide one.

## Get started

1. Download `MarioKartNitro.exe` from the [latest release](../../releases/latest).
2. Run it and point it to `Dolphin.exe` and your game file.
3. Let it download the mod the first time.
4. Press **Play**.

## FAQ

<details>
<summary><b>Where does the launcher put the mod?</b></summary>
<br />
In Dolphin's own user folder, under <code>Load/Riivolution</code>. Nothing is installed anywhere else.
</details>

<details>
<summary><b>Will it touch my save files?</b></summary>
<br />
No. Save data under <code>riivolution/save</code> is never downloaded, replaced or deleted by the launcher. The game creates it on your PC the first time you play.
</details>

<details>
<summary><b>I get error 22005 when going online.</b></summary>
<br />
That error means the save profile belongs to a different console. Close Dolphin, then rename
<code>Dolphin\User\Load\Riivolution\riivolution\save\NitroWFC\RMCP\rksys.dat</code> to <code>rksys.dat.bak</code> (use <code>RMCE</code> for the US version) and start the game again.
A new save is created from your normal Mario Kart Wii save. Only do this if you have the error, because a working save holds your progress.
</details>

<details>
<summary><b>The download failed or says GitHub is not serving a file.</b></summary>
<br />
The launcher retries by itself. If it still fails, wait a few minutes and press Play again. Everything that already downloaded is kept.
</details>

<details>
<summary><b>Do you provide the game?</b></summary>
<br />
No. You need your own copy of Mario Kart Wii.
</details>

## Built with

<p align="center">
<img src="assets/stack.svg" alt="Python, JavaScript, HTML5, CSS3, VS Code, Git, GitHub, Windows" width="100%" />
</p>

## License and community

GPL v3, see [LICENSE.txt](LICENSE.txt). Third-party parts and their licenses are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
Questions, bugs, or just want to chat? Join the [Discord](https://discord.gg/AhkHNPG65G).

<br />

<div align="center">
<sub>A project by <b>NitroForge</b>. Mario Kart Nitro is a fan project and is not affiliated with or endorsed by Nintendo. Mario Kart and Wii are trademarks of Nintendo.</sub>
</div>
