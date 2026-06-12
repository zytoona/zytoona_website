(function () {
  const STYLE_ID = "wordscrush-portable-logo-styles";

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }

    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .wc-logo-root {
        position: relative;
        display: inline-block;
        max-width: 100%;
      }

      .wc-logo-shell {
        position: relative;
        margin: 0 auto;
      }

      .wc-logo-stage {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: top left;
      }

      .wc-logo-built,
      .wc-logo-reference {
        position: absolute;
        inset: 0;
      }

      .wc-logo-piece,
      .wc-logo-reference {
        user-select: none;
        -webkit-user-drag: none;
      }

      .wc-logo-piece {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 0 0;
      }

      .wc-logo-piece--shadow {
        pointer-events: none;
      }

      .wc-logo-reference {
        width: 100%;
        height: 100%;
        opacity: 0;
        pointer-events: none;
        transition: opacity 140ms ease;
      }

      .wc-logo-reference--visible {
        opacity: 1;
      }
    `;

    document.head.appendChild(style);
  }

  function joinPath(basePath, relativePath) {
    if (!basePath) {
      return relativePath;
    }

    const trimmedBase = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
    const trimmedPath = relativePath.startsWith("/") ? relativePath.slice(1) : relativePath;
    return `${trimmedBase}/${trimmedPath}`;
  }

  function cloneLayout(layout) {
    return {
      width: layout.width,
      height: layout.height,
      reference: layout.reference,
      layers: layout.layers.map((layer) => ({
        id: layer.id,
        src: layer.src,
        matrix: layer.matrix.slice(),
        opacity: layer.opacity,
        filter: layer.filter,
        kind: layer.kind,
      })),
    };
  }

  function createPiece(layer, basePath) {
    const piece = document.createElement("img");
    piece.className = `wc-logo-piece wc-logo-piece--${layer.kind}`;
    piece.dataset.layerId = layer.id;
    piece.alt = "";
    piece.draggable = false;
    piece.decoding = "async";
    piece.src = joinPath(basePath, layer.src);
    piece.style.transform = `matrix(${layer.matrix.join(",")})`;
    piece.style.opacity = layer.opacity == null ? "1" : String(layer.opacity);
    piece.style.filter = layer.filter || "none";
    return piece;
  }

  function setStageScale(shell, stage, layout, scale) {
    shell.style.width = `${layout.width * scale}px`;
    shell.style.height = `${layout.height * scale}px`;
    stage.style.width = `${layout.width}px`;
    stage.style.height = `${layout.height}px`;
    stage.style.transform = `scale(${scale})`;
  }

  function create(container, options) {
    if (!(container instanceof Element)) {
      throw new Error("WordsCrushPortableLogo.create requires a DOM element container.");
    }

    const config = options || {};
    const layout = cloneLayout(config.layout || window.LOGO_LAYOUT);

    if (!layout || !Array.isArray(layout.layers)) {
      throw new Error("WordsCrushPortableLogo.create requires a layout with width, height, and layers.");
    }

    ensureStyles();

    const basePath = config.basePath || ".";
    const initialScale = Number(config.scale) > 0 ? Number(config.scale) : 1;

    const root = document.createElement("div");
    root.className = "wc-logo-root";

    const shell = document.createElement("div");
    shell.className = "wc-logo-shell";

    const stage = document.createElement("div");
    stage.className = "wc-logo-stage";

    const built = document.createElement("div");
    built.className = "wc-logo-built";

    const reference = document.createElement("img");
    reference.className = "wc-logo-reference";
    reference.alt = config.referenceAlt || "Reference logo overlay";
    reference.draggable = false;
    reference.src = joinPath(basePath, layout.reference);
    reference.width = layout.width;
    reference.height = layout.height;

    layout.layers.forEach((layer) => {
      built.appendChild(createPiece(layer, basePath));
    });

    stage.appendChild(built);
    stage.appendChild(reference);
    shell.appendChild(stage);
    root.appendChild(shell);
    container.replaceChildren(root);

    let currentScale = initialScale;
    let referenceVisible = Boolean(config.referenceVisible);

    function sync() {
      setStageScale(shell, stage, layout, currentScale);
      reference.classList.toggle("wc-logo-reference--visible", referenceVisible);
    }

    function setScale(scale) {
      const numeric = Number(scale);
      if (!Number.isFinite(numeric) || numeric <= 0) {
        return currentScale;
      }

      currentScale = numeric;
      sync();
      return currentScale;
    }

    function fitToWidth(width) {
      const numeric = Number(width);
      if (!Number.isFinite(numeric) || numeric <= 0) {
        return currentScale;
      }

      return setScale(numeric / layout.width);
    }

    function setReferenceVisible(visible) {
      referenceVisible = Boolean(visible);
      sync();
    }

    sync();

    return {
      root,
      shell,
      stage,
      built,
      reference,
      layout: cloneLayout(layout),
      setScale,
      fitToWidth,
      setReferenceVisible,
      destroy() {
        container.replaceChildren();
      },
    };
  }

  window.WordsCrushPortableLogo = {
    create,
    version: "1.0.0",
  };
})();
