# AEGIS Website

Static marketing website and English user guide for AEGIS, built with Vite and React.

## Local Development

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm test
npm run lint
npm run build
npm run preview
```

## Demo Video

Place the demo video at:

```text
public/demo-video.mp4
```

The site embeds that file with a static HTML video player. If the file is not present, the page still builds and displays the surrounding explanatory copy.

## Content Sources

- `docs/AEGIS-Style-Guide.md` defines the KEEP visual direction, color tokens, page structure, and accessibility requirements.
- `../evalguide_client/QUICKSTART_EN.md` is the source for the teacher-facing English guide content.

Marketing copy should use `AEGIS` publicly. Use `CritiX` only in guide or tutorial context, use `RubriX` only for deeper technical explanation, and avoid the internal `EvalGuide` name in public page copy.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys it to GitHub Pages.

For user or organization pages hosted at the domain root, leave `VITE_BASE_PATH` unset.

For project pages, set a repository variable named `VITE_BASE_PATH` to the project path, including leading and trailing slashes. Example:

```text
/AEGIS/
```

Then enable GitHub Pages with GitHub Actions as the deployment source.
