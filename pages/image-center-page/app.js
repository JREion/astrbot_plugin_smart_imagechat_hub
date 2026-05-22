const els = {
  statusBadge: document.getElementById("statusBadge"),
  progressBar: document.getElementById("progressBar"),
  percentText: document.getElementById("percentText"),
  totalCount: document.getElementById("totalCount"),
  completedCount: document.getElementById("completedCount"),
  failedCount: document.getElementById("failedCount"),
  remainingCount: document.getElementById("remainingCount"),
  currentImage: document.getElementById("currentImage"),
  libraryCount: document.getElementById("libraryCount"),
  updatedAt: document.getElementById("updatedAt"),
  messageText: document.getElementById("messageText"),
  completeHint: document.getElementById("completeHint"),
  refreshButton: document.getElementById("refreshButton"),
  openUploadButton: document.getElementById("openUploadButton"),
  tagCategoryButton: document.getElementById("tagCategoryButton"),
  moreConfigButton: document.getElementById("moreConfigButton"),
  userSearchButton: document.getElementById("userSearchButton"),
  proactiveEmojiButton: document.getElementById("proactiveEmojiButton"),
  autoCollectionButton: document.getElementById("autoCollectionButton"),
  importButton: document.getElementById("importButton"),
  exportButton: document.getElementById("exportButton"),
  uploadInput: document.getElementById("uploadInput"),
  uploadButton: document.getElementById("uploadButton"),
  uploadMessage: document.getElementById("uploadMessage"),
  uploadOverlay: document.getElementById("uploadOverlay"),
  uploadCloseButton: document.getElementById("uploadCloseButton"),
  captionProviderInput: document.getElementById("captionProviderInput"),
  captionProviderWarning: document.getElementById("captionProviderWarning"),
  providerWarningOverlay: document.getElementById("providerWarningOverlay"),
  providerWarningCloseButton: document.getElementById(
    "providerWarningCloseButton",
  ),
  warningCaptionProviderInput: document.getElementById(
    "warningCaptionProviderInput",
  ),
  warningCaptionProviderHint: document.getElementById(
    "warningCaptionProviderHint",
  ),
  providerWarningMessage: document.getElementById("providerWarningMessage"),
  providerWarningContinueButton: document.getElementById(
    "providerWarningContinueButton",
  ),
  providerWarningCancelButton: document.getElementById(
    "providerWarningCancelButton",
  ),
  globalTagsMeta: document.getElementById("globalTagsMeta"),
  globalTagsInput: document.getElementById("globalTagsInput"),
  globalTagsPreview: document.getElementById("globalTagsPreview"),
  globalTagsMessage: document.getElementById("globalTagsMessage"),
  globalTagsSaveButton: document.getElementById("globalTagsSaveButton"),
  manualLibraryScopeButton: document.getElementById(
    "manualLibraryScopeButton",
  ),
  autoCollectionScopeButton: document.getElementById(
    "autoCollectionScopeButton",
  ),
  manualLibraryScope: document.getElementById("manualLibraryScope"),
  autoCollectionScope: document.getElementById("autoCollectionScope"),
  libraryScopeSwitchRow: document.getElementById("libraryScopeSwitchRow"),
  libraryMeta: document.getElementById("libraryMeta"),
  libraryListModeButton: document.getElementById("libraryListModeButton"),
  libraryGalleryModeButton: document.getElementById("libraryGalleryModeButton"),
  libraryUploadButton: document.getElementById("libraryUploadButton"),
  libraryList: document.getElementById("libraryList"),
  emptyLibraryText: document.getElementById("emptyLibraryText"),
  pendingPoolMeta: document.getElementById("pendingPoolMeta"),
  pendingSkipButton: document.getElementById("pendingSkipButton"),
  pendingSelectAllButton: document.getElementById("pendingSelectAllButton"),
  pendingAcceptButton: document.getElementById("pendingAcceptButton"),
  pendingDiscardButton: document.getElementById("pendingDiscardButton"),
  pendingPoolList: document.getElementById("pendingPoolList"),
  emptyPendingPoolText: document.getElementById("emptyPendingPoolText"),
  pendingPoolMessage: document.getElementById("pendingPoolMessage"),
  solidifiedLibraryMeta: document.getElementById("solidifiedLibraryMeta"),
  solidifiedListModeButton: document.getElementById("solidifiedListModeButton"),
  solidifiedGalleryModeButton: document.getElementById("solidifiedGalleryModeButton"),
  solidifiedBackToScopeButton: document.getElementById(
    "solidifiedBackToScopeButton",
  ),
  solidifiedLibraryList: document.getElementById("solidifiedLibraryList"),
  emptySolidifiedLibraryText: document.getElementById(
    "emptySolidifiedLibraryText",
  ),
  editorOverlay: document.getElementById("editorOverlay"),
  editorTitle: document.getElementById("editorTitle"),
  editorImage: document.getElementById("editorImage"),
  tagInput: document.getElementById("tagInput"),
  globalTagChoices: document.getElementById("globalTagChoices"),
  editorMessage: document.getElementById("editorMessage"),
  editorSaveButton: document.getElementById("editorSaveButton"),
  editorCancelButton: document.getElementById("editorCancelButton"),
  editorCloseButton: document.getElementById("editorCloseButton"),
  tagCategoryOverlay: document.getElementById("tagCategoryOverlay"),
  tagCategoryPresetChoices: document.getElementById("tagCategoryPresetChoices"),
  tagCategoryCustomInput: document.getElementById("tagCategoryCustomInput"),
  tagCategoryRecaptionInput: document.getElementById("tagCategoryRecaptionInput"),
  tagCategoryMessage: document.getElementById("tagCategoryMessage"),
  tagCategorySaveButton: document.getElementById("tagCategorySaveButton"),
  tagCategoryCancelButton: document.getElementById("tagCategoryCancelButton"),
  proactiveEmojiOverlay: document.getElementById("proactiveEmojiOverlay"),
  proactiveEmojiEnabledInput: document.getElementById(
    "proactiveEmojiEnabledInput",
  ),
  proactiveEmojiProviderInput: document.getElementById(
    "proactiveEmojiProviderInput",
  ),
  proactiveEmojiMemeOnlyInput: document.getElementById(
    "proactiveEmojiMemeOnlyInput",
  ),
  proactiveEmojiEmbedInput: document.getElementById(
    "proactiveEmojiEmbedInput",
  ),
  proactiveEmojiProbabilityInput: document.getElementById(
    "proactiveEmojiProbabilityInput",
  ),
  proactiveEmojiMessage: document.getElementById("proactiveEmojiMessage"),
  proactiveEmojiSaveButton: document.getElementById("proactiveEmojiSaveButton"),
  proactiveEmojiCancelButton: document.getElementById(
    "proactiveEmojiCancelButton",
  ),
  autoCollectionOverlay: document.getElementById("autoCollectionOverlay"),
  autoCollectionEnabledInput: document.getElementById(
    "autoCollectionEnabledInput",
  ),
  autoCollectionIncludeInput: document.getElementById(
    "autoCollectionIncludeInput",
  ),
  autoCollectionGroupsInput: document.getElementById(
    "autoCollectionGroupsInput",
  ),
  autoCollectionMaxSizeInput: document.getElementById(
    "autoCollectionMaxSizeInput",
  ),
  autoCollectionPendingLimitInput: document.getElementById(
    "autoCollectionPendingLimitInput",
  ),
  autoCollectionTtlInput: document.getElementById("autoCollectionTtlInput"),
  autoCollectionAutoAcceptInput: document.getElementById(
    "autoCollectionAutoAcceptInput",
  ),
  autoCollectionRejectDiscardedInput: document.getElementById(
    "autoCollectionRejectDiscardedInput",
  ),
  autoCollectionSolidifiedLimitInput: document.getElementById(
    "autoCollectionSolidifiedLimitInput",
  ),
  autoCollectionMessage: document.getElementById("autoCollectionMessage"),
  autoCollectionSaveButton: document.getElementById("autoCollectionSaveButton"),
  autoCollectionCancelButton: document.getElementById(
    "autoCollectionCancelButton",
  ),
  userSearchOverlay: document.getElementById("userSearchOverlay"),
  userSearchEnabledInput: document.getElementById("userSearchEnabledInput"),
  userSearchMessage: document.getElementById("userSearchMessage"),
  userSearchSaveButton: document.getElementById("userSearchSaveButton"),
  userSearchCancelButton: document.getElementById("userSearchCancelButton"),
  configOverlay: document.getElementById("configOverlay"),
  configKeywordsInput: document.getElementById("configKeywordsInput"),
  configHiddenImagesInput: document.getElementById("configHiddenImagesInput"),
  configSyncOnStartupInput: document.getElementById("configSyncOnStartupInput"),
  configConfidenceInput: document.getElementById("configConfidenceInput"),
  scheduledBackupEnabledInput: document.getElementById(
    "scheduledBackupEnabledInput",
  ),
  scheduledBackupTimeInput: document.getElementById("scheduledBackupTimeInput"),
  scheduledBackupLimitInput: document.getElementById("scheduledBackupLimitInput"),
  scheduledBackupConfigList: document.getElementById("scheduledBackupConfigList"),
  configUseCustomReplyInput: document.getElementById("configUseCustomReplyInput"),
  configCustomReplyInput: document.getElementById("configCustomReplyInput"),
  configLlmReplyWhenNotFoundInput: document.getElementById(
    "configLlmReplyWhenNotFoundInput",
  ),
  configNotFoundReplyInput: document.getElementById("configNotFoundReplyInput"),
  configEmptyLibraryReplyInput: document.getElementById(
    "configEmptyLibraryReplyInput",
  ),
  configMessage: document.getElementById("configMessage"),
  configSaveButton: document.getElementById("configSaveButton"),
  configCancelButton: document.getElementById("configCancelButton"),
  importOverlay: document.getElementById("importOverlay"),
  importFileInput: document.getElementById("importFileInput"),
  importModeOverwrite: document.getElementById("importModeOverwrite"),
  importModeMerge: document.getElementById("importModeMerge"),
  importOverwriteConfig: document.getElementById("importOverwriteConfig"),
  importMessage: document.getElementById("importMessage"),
  importConfirmButton: document.getElementById("importConfirmButton"),
  importCancelButton: document.getElementById("importCancelButton"),
  importCloseButton: document.getElementById("importCloseButton"),
  exportOverlay: document.getElementById("exportOverlay"),
  exportCloseButton: document.getElementById("exportCloseButton"),
  exportProgressBar: document.getElementById("exportProgressBar"),
  exportBackupList: document.getElementById("exportBackupList"),
  emptyExportBackupText: document.getElementById("emptyExportBackupText"),
  exportDialogMessage: document.getElementById("exportDialogMessage"),
  exportManualButton: document.getElementById("exportManualButton"),
  exportCancelButton: document.getElementById("exportCancelButton"),
  solidifiedCapacityOverlay: document.getElementById("solidifiedCapacityOverlay"),
  capacityWarningText: document.getElementById("capacityWarningText"),
  capacityDeleteOldestButton: document.getElementById("capacityDeleteOldestButton"),
  capacityExpandButton: document.getElementById("capacityExpandButton"),
  capacityCancelButton: document.getElementById("capacityCancelButton"),
  capacityCancelTopButton: document.getElementById("capacityCancelTopButton"),
};

const pluginApiBase = "/api/plug/astrbot_plugin_smart_imagechat_hub";
const PLUGIN_VERSION = "v2.4.1";
let bridge = window.AstrBotPluginPage || null;
let bridgeReady = false;
let bridgeUnavailable = false;
let libraryImages = [];
let solidifiedLibraryImages = [];
let pendingPoolImages = [];
let selectedPendingImageIds = new Set();
let globalTags = [];
let editingImage = null;
let globalTagsDirty = false;
let tagCategorySettings = null;
let editorScrollLock = null;
let uploadedInThisPageSession = false;
let uploadProviderCheckInProgress = false;
let warningProviderConfig = null;
let libraryViewMode = "list";
let solidifiedLibraryViewMode = "list";
let libraryScopeMode = "manual";
let selectedGalleryImageId = "";
let selectedSolidifiedGalleryImageId = "";
let libraryRenderResizeTimer = 0;
let solidifiedLibraryRenderResizeTimer = 0;
let lastLibraryListWidth = 0;
let lastSolidifiedLibraryListWidth = 0;
let pageScrollIdleTimer = 0;
let isPageScrolling = false;
let pendingLibraryRender = new Set();
let renderedLibrarySignature = "";
let renderedPendingPoolSignature = "";
let pendingCapacityActionImageIds = [];
let scheduledBackupState = {
  enabled: true,
  backup_time: "06:00",
  backup_limit: 3,
  backup_files: [],
  storage_dir: "",
};
let autoCollectionConfigCache = {
  pending_pool_limit: 100,
  solidified_library_limit: 300,
};
const imageUrlCache = new Map();
const MANUAL_LIBRARY_SOURCE = "manual_upload";
const SOLIDIFIED_LIBRARY_SOURCE = "auto_collected";

const LIBRARY_MODE_ICONS = {
  list:
    '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><rect x="2" y="2.5" width="3" height="3" rx="0.8"/><rect x="7" y="3.3" width="7" height="1.4" rx="0.7"/><rect x="2" y="6.5" width="3" height="3" rx="0.8"/><rect x="7" y="7.3" width="7" height="1.4" rx="0.7"/><rect x="2" y="11" width="3" height="3" rx="0.8"/><rect x="7" y="11.8" width="7" height="1.4" rx="0.7"/></svg>',
  gallery:
    '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><rect x="1.8" y="1.8" width="5.1" height="5.1" rx="1"/><rect x="9.1" y="1.8" width="5.1" height="5.1" rx="1"/><rect x="1.8" y="9.1" width="5.1" height="5.1" rx="1"/><rect x="9.1" y="9.1" width="5.1" height="5.1" rx="1"/></svg>',
  trash:
    '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M6.2 1.6h3.6a1.2 1.2 0 0 1 1.2 1.2V4h2.7a.8.8 0 0 1 0 1.6h-.8V12.3A2.1 2.1 0 0 1 10.8 14.4H5.2a2.1 2.1 0 0 1-2.1-2.1V5.6h-.8a.8.8 0 0 1 0-1.6H5V2.8a1.2 1.2 0 0 1 1.2-1.2Zm.2 2.4h3.2V3.1H6.4V4Zm-1.8 1.6v6.6c0 .3.3.6.6.6h5.2c.3 0 .6-.3.6-.6V5.6H4.8Zm1.1 1.1h1.1v4.3H5.9V6.7Zm2.5 0h1.1v4.3H8.4V6.7Z"/></svg>',
};

const SCOPE_MODE_ICONS = {
  manual:
    '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M3.2 2.4c0-.6.6-.9 1.1-.6l8.7 5.3c.6.4.4 1.3-.3 1.4l-3.1.5 1.8 3.1c.2.4.1.9-.3 1.1l-1.1.6c-.4.2-.9.1-1.1-.3L7.1 10.4l-2.4 2.4c-.5.5-1.5.2-1.5-.6V2.4z"/></svg>',
  auto:
    '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><rect x="2.2" y="11.2" width="9.6" height="2" rx="1" transform="rotate(-45 2.2 11.2)"/><path d="M10.7 1.8l.7 1.7 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.7z"/><path d="M13.1 8.1l.4 1 .9.4-.9.4-.4 1-.4-1-.9-.4.9-.4.4-1z"/><path d="M4.2 3.2l.4 1 .9.4-.9.4-.4 1-.4-1-.9-.4.9-.4.4-1z"/></svg>',
};

const UP_ARROW_ICON =
  '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false"><path d="M8 3.1 3.2 7.9a.9.9 0 0 0 1.3 1.3l2.6-2.6v5.6a.9.9 0 1 0 1.8 0V6.6l2.6 2.6a.9.9 0 1 0 1.3-1.3L8 3.1Z"/></svg>';

const PENDING_SELECTION_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.3 6.8a1 1 0 0 1 0 1.4l-9.2 9.2a1 1 0 0 1-1.4 0L3.7 11.4a1 1 0 0 1 1.4-1.4l5 5 8.5-8.5a1 1 0 0 1 1.4 0Z"/></svg>';

els.manualLibraryScopeButton.innerHTML = `${SCOPE_MODE_ICONS.manual}<span>手动上传的图库</span>`;
els.autoCollectionScopeButton.innerHTML = `${SCOPE_MODE_ICONS.auto}<span>自动收集的图库</span>`;
els.libraryListModeButton.innerHTML = LIBRARY_MODE_ICONS.list;
els.libraryGalleryModeButton.innerHTML = LIBRARY_MODE_ICONS.gallery;
els.solidifiedListModeButton.innerHTML = LIBRARY_MODE_ICONS.list;
els.solidifiedGalleryModeButton.innerHTML = LIBRARY_MODE_ICONS.gallery;
els.solidifiedBackToScopeButton.innerHTML = UP_ARROW_ICON;

const standbyHintHtml =
  "请点击 [上传新图片] 按钮更新图库，本插件会自动为新图片分配标签。<br>" +
  "本 Page 页面中提供了丰富的功能配置和图库管理方法，请向下划动本页面，进一步进行详细配置。";
const doneHintHtml =
  "图片标签生成已经完成。请向下划动本页面，进一步进行详细配置。";

const statusText = {
  standby: "待命中",
  idle: "空闲",
  pending: "等待中",
  running: "生成中",
  done: "已完成",
  failed: "有失败",
  cancelled: "已取消",
};

function asInt(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 0;
}

function collectionLimitText(limit) {
  const normalized = asInt(limit);
  return normalized < 0 ? "不限" : String(normalized);
}

function renderLimitedCount(metaElement, count, limit) {
  if (!metaElement) {
    return;
  }
  const current = Math.max(0, asInt(count));
  const normalizedLimit = asInt(limit);
  const currentSpan = document.createElement("span");
  currentSpan.className = "count-current";
  currentSpan.textContent = String(current);
  currentSpan.classList.toggle(
    "is-near-limit",
    normalizedLimit > 0 && current >= normalizedLimit * 0.8 && current < normalizedLimit,
  );
  currentSpan.classList.toggle(
    "is-over-limit",
    normalizedLimit >= 0 && current >= normalizedLimit,
  );

  metaElement.replaceChildren(
    currentSpan,
    document.createTextNode(`/${collectionLimitText(normalizedLimit)} 张`),
  );
}

function renderSolidifiedLibraryCount() {
  renderLimitedCount(
    els.solidifiedLibraryMeta,
    solidifiedLibraryImages.length,
    autoCollectionConfigCache.solidified_library_limit,
  );
}

function formatTime(timestamp) {
  const seconds = asInt(timestamp);
  if (!seconds) {
    return "-";
  }
  return new Date(seconds * 1000).toLocaleString();
}

function formatPendingCollectionTime(timestamp) {
  const seconds = asInt(timestamp);
  if (!seconds) {
    return "-";
  }
  const date = new Date(seconds * 1000);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${month}-${day} ${hour}:${minute}`;
}

function normalizeTags(value) {
  const items = Array.isArray(value)
    ? value
    : String(value || "").split(/[\n,，、;； ]+/);
  const tags = [];
  for (const item of items) {
    const tag = String(item || "").trim();
    if (tag && !tags.includes(tag)) {
      tags.push(tag);
    }
  }
  return tags;
}

function normalizePathList(value) {
  const items = Array.isArray(value)
    ? value
    : String(value || "").split(/[\n,，、;；]+/);
  const paths = [];
  for (const item of items) {
    const relPath = String(item || "")
      .replaceAll("\\", "/")
      .replace(/^\/+/, "")
      .trim();
    if (relPath && !paths.includes(relPath)) {
      paths.push(relPath);
    }
  }
  return paths;
}

function clampConfidence(value) {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) {
    return 0.45;
  }
  return Math.max(0, Math.min(parsed, 1));
}

function clampProbability(value) {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) {
    return 0.25;
  }
  return Math.max(0, Math.min(parsed, 1));
}

function clampInt(value, defaultValue, minValue = 0) {
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed)) {
    return defaultValue;
  }
  return Math.max(parsed, minValue);
}

function normalizeBackupTime(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{1,2}):(\d{1,2})$/);
  if (!match) {
    return "06:00";
  }
  const hour = Math.max(0, Math.min(asInt(match[1]), 23));
  const minute = Math.max(0, Math.min(asInt(match[2]), 59));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatBytes(bytes) {
  const size = Math.max(0, asInt(bytes));
  if (size >= 1024 * 1024) {
    return `${(size / 1024 / 1024).toFixed(1)} MB`;
  }
  if (size >= 1024) {
    return `${Math.ceil(size / 1024)} KB`;
  }
  return `${size} B`;
}

function extractBackupVersion(filename) {
  const match = String(filename || "").match(/_(v\d+(?:\.\d+){1,3})(?:_\d+)?\.zip$/i);
  return match ? match[1] : "";
}

function setStatus(status) {
  const normalized = status || "idle";
  els.statusBadge.textContent = statusText[normalized] || normalized;
  els.statusBadge.dataset.status = normalized;
}

function setMessage(message) {
  els.messageText.textContent = message;
}

function lockEditorBackgroundScroll() {
  if (editorScrollLock) {
    return;
  }
  const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
  editorScrollLock = {
    scrollY,
    position: document.body.style.position,
    top: document.body.style.top,
    left: document.body.style.left,
    right: document.body.style.right,
    width: document.body.style.width,
    overflowY: document.body.style.overflowY,
  };
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflowY = "hidden";
}

function unlockEditorBackgroundScroll() {
  if (!editorScrollLock) {
    return;
  }
  const { scrollY, position, top, left, right, width, overflowY } = editorScrollLock;
  editorScrollLock = null;
  document.body.style.position = position;
  document.body.style.top = top;
  document.body.style.left = left;
  document.body.style.right = right;
  document.body.style.width = width;
  document.body.style.overflowY = overflowY;
  window.scrollTo(0, scrollY);
}

function captureScrollPosition() {
  const scrollingElement = document.scrollingElement || document.documentElement;
  return {
    x:
      window.scrollX ||
      scrollingElement.scrollLeft ||
      document.documentElement.scrollLeft ||
      0,
    y:
      window.scrollY ||
      scrollingElement.scrollTop ||
      document.documentElement.scrollTop ||
      0,
  };
}

function restoreScrollPosition(position) {
  if (!position) {
    return;
  }
  const restore = () => window.scrollTo(position.x, position.y);
  restore();
  window.requestAnimationFrame(restore);
}

function renderLibraryPreservingScroll(source = MANUAL_LIBRARY_SOURCE) {
  const position = captureScrollPosition();
  renderLibrary(source);
  restoreScrollPosition(position);
}

function flushPendingLibraryRenders() {
  if (isPageScrolling || !pendingLibraryRender.size) {
    return;
  }
  const sources = Array.from(pendingLibraryRender);
  pendingLibraryRender.clear();
  for (const source of sources) {
    renderLibraryPreservingScroll(source);
  }
}

function deferLibraryRenderUntilScrollIdle(source = MANUAL_LIBRARY_SOURCE) {
  pendingLibraryRender.add(source);
  if (!isPageScrolling) {
    flushPendingLibraryRenders();
  }
}

function withTimeout(promise, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = window.setTimeout(() => {
      reject(new Error("等待 AstrBot Plugin Page Bridge 超时"));
    }, timeoutMs);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      },
    );
  });
}

async function ensureBridgeReady() {
  if (bridgeUnavailable) {
    throw new Error("AstrBot Plugin Page Bridge 不可用");
  }
  bridge = window.AstrBotPluginPage || bridge;
  if (!bridge) {
    bridgeUnavailable = true;
    throw new Error("AstrBot Plugin Page Bridge 未加载");
  }
  if (bridgeReady) {
    return bridge;
  }
  try {
    await withTimeout(bridge.ready(), 5000);
  } catch (error) {
    bridgeUnavailable = true;
    throw error;
  }
  bridgeReady = true;
  return bridge;
}

function unwrapApiResponse(payload) {
  if (payload && typeof payload === "object" && "data" in payload) {
    return payload.data;
  }
  return payload;
}

async function directPluginApi(method, endpoint, body) {
  const options = {
    method,
    credentials: "same-origin",
    headers: {},
  };
  if (body !== undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }
  const response = await fetch(`${pluginApiBase}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const payload = await response.json();
  if (payload?.status === "error") {
    throw new Error(payload.message || "插件 API 请求失败");
  }
  return unwrapApiResponse(payload);
}

async function pluginApiGet(endpoint) {
  try {
    const api = await ensureBridgeReady();
    return unwrapApiResponse(await api.apiGet(endpoint));
  } catch (bridgeError) {
    return directPluginApi("GET", endpoint);
  }
}

async function pluginApiPost(endpoint, body) {
  try {
    const api = await ensureBridgeReady();
    return unwrapApiResponse(await api.apiPost(endpoint, body));
  } catch (bridgeError) {
    return directPluginApi("POST", endpoint, body);
  }
}

async function pluginApiDownload(endpoint, filename) {
  const api = await ensureBridgeReady();
  await api.download(endpoint, undefined, filename || "");
}

async function uploadBackupConfig(file, libraryMode, overwritePluginConfig) {
  const api = await ensureBridgeReady();
  const encodedFilename = [
    "__asmimgimport__",
    libraryMode === "overwrite" ? "overwrite" : "merge",
    overwritePluginConfig ? "1" : "0",
    encodeURIComponent(file.name || "backup.zip"),
  ].join("::");
  const uploadFile = new File([file], encodedFilename, {
    type: file.type || "application/zip",
    lastModified: file.lastModified || Date.now(),
  });
  return unwrapApiResponse(
    await api.upload("caption_import_config_file", uploadFile),
  );
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.includes(",") ? result.split(",", 2)[1] : result);
    };
    reader.onerror = () => {
      reject(reader.error || new Error("读取文件失败"));
    };
    reader.readAsDataURL(file);
  });
}

async function uploadImageFile(file) {
  const contentBase64 = await readFileAsBase64(file);
  return pluginApiPost("caption_upload_image", {
    filename: file.name || "image",
    mime_type: file.type || "",
    size: file.size || 0,
    content_base64: contentBase64,
  });
}

function directImageUrl(imageId) {
  return `${pluginApiBase}/caption_image/${encodeURIComponent(imageId)}`;
}

function pendingImageUrl(imageId) {
  return `${pluginApiBase}/collection_pending_image/${encodeURIComponent(imageId)}`;
}

function imageCacheKey(image) {
  return [
    String(image?.id || "").trim(),
    String(image?.mtime || 0),
    String(image?.size || 0),
  ].join(":");
}

async function resolveImageUrl(image) {
  const imageId = String(image?.id || "").trim();
  if (!imageId) {
    return "";
  }
  const cacheKey = imageCacheKey(image);
  if (imageUrlCache.has(cacheKey)) {
    return imageUrlCache.get(cacheKey);
  }

  try {
    const result = await pluginApiGet(`caption_image_data/${imageId}`);
    if (result?.data_url) {
      imageUrlCache.set(cacheKey, result.data_url);
      return result.data_url;
    }
  } catch (error) {
    // Fall back to the direct plugin API route when JSON image data cannot be
    // read, for example on older dashboard builds.
  }

  const url = image.thumbnail_url || directImageUrl(imageId);
  imageUrlCache.set(cacheKey, url);
  return url;
}

async function resolvePendingImageUrl(image) {
  const imageId = String(image?.id || "").trim();
  if (!imageId) {
    return "";
  }
  const cacheKey = `pending:${imageCacheKey(image)}`;
  if (imageUrlCache.has(cacheKey)) {
    return imageUrlCache.get(cacheKey);
  }

  try {
    const result = await pluginApiGet(`collection_pending_image_data/${imageId}`);
    if (result?.data_url) {
      imageUrlCache.set(cacheKey, result.data_url);
      return result.data_url;
    }
  } catch (error) {
    // Fall back to the direct plugin API route.
  }

  const url = image.thumbnail_url || pendingImageUrl(imageId);
  imageUrlCache.set(cacheKey, url);
  return url;
}

function applyResolvedImageUrl(img, image) {
  img.removeAttribute("src");
  img.classList.add("is-loading");
  resolveImageUrl(image).then(
    (url) => {
      if (!url) {
        return;
      }
      img.src = url;
      img.classList.remove("is-loading");
    },
    () => {
      const fallback = image.thumbnail_url || directImageUrl(image.id);
      if (fallback) {
        img.src = fallback;
      }
      img.classList.remove("is-loading");
    },
  );
}

function applyResolvedPendingImageUrl(img, image) {
  img.removeAttribute("src");
  img.classList.add("is-loading");
  resolvePendingImageUrl(image).then(
    (url) => {
      if (!url) {
        return;
      }
      img.src = url;
      img.classList.remove("is-loading");
    },
    () => {
      const fallback = image.thumbnail_url || pendingImageUrl(image.id);
      if (fallback) {
        img.src = fallback;
      }
      img.classList.remove("is-loading");
    },
  );
}

function renderProgress(progress) {
  const percent = Math.max(0, Math.min(asInt(progress.percent), 100));
  const running = progress.running || progress.status === "running";
  const complete = !running && progress.status === "done";
  const standby = !uploadedInThisPageSession;

  setStatus(standby ? "standby" : progress.status);
  els.progressBar.style.width = `${percent}%`;
  els.progressBar.classList.toggle("is-running", running);
  els.percentText.textContent = `${percent}%`;
  els.totalCount.textContent = asInt(progress.total);
  els.completedCount.textContent = asInt(progress.completed);
  els.failedCount.textContent = asInt(progress.failed);
  els.remainingCount.textContent = asInt(progress.remaining);
  els.currentImage.textContent = progress.current_image || "-";
  els.libraryCount.textContent = asInt(progress.library_images);
  els.updatedAt.textContent = formatTime(progress.updated_at);
  els.messageText.textContent = progress.message || "暂无后台任务。";
  if (standby) {
    els.completeHint.innerHTML = standbyHintHtml;
    els.completeHint.classList.remove("is-hidden");
  } else {
    els.completeHint.innerHTML = doneHintHtml;
    els.completeHint.classList.toggle("is-hidden", !complete);
  }
}

function updateLibraryScopeVisibility() {
  const autoMode = libraryScopeMode === "auto";
  els.manualLibraryScope.classList.toggle("is-hidden", autoMode);
  els.autoCollectionScope.classList.toggle("is-hidden", !autoMode);
  els.manualLibraryScopeButton.setAttribute("aria-pressed", String(!autoMode));
  els.autoCollectionScopeButton.setAttribute("aria-pressed", String(autoMode));
}

function setLibraryScopeMode(mode) {
  const nextMode = mode === "auto" ? "auto" : "manual";
  if (libraryScopeMode === nextMode) {
    updateLibraryScopeVisibility();
    return;
  }
  const position = captureScrollPosition();
  libraryScopeMode = nextMode;
  updateLibraryScopeVisibility();
  restoreScrollPosition(position);
}

function scrollToLibraryScopeSwitch() {
  const target = els.libraryScopeSwitchRow;
  if (!target) {
    return;
  }
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function tagChip(tag) {
  const chip = document.createElement("span");
  chip.className = "tag-chip";
  chip.textContent = tag;
  return chip;
}

function getLibraryState(source = MANUAL_LIBRARY_SOURCE) {
  if (source === SOLIDIFIED_LIBRARY_SOURCE) {
    return {
      source: SOLIDIFIED_LIBRARY_SOURCE,
      images: solidifiedLibraryImages,
      list: els.solidifiedLibraryList,
      meta: els.solidifiedLibraryMeta,
      empty: els.emptySolidifiedLibraryText,
      listModeButton: els.solidifiedListModeButton,
      galleryModeButton: els.solidifiedGalleryModeButton,
      getViewMode: () => solidifiedLibraryViewMode,
      setViewModeValue: (mode) => {
        solidifiedLibraryViewMode = mode;
      },
      getSelectedId: () => selectedSolidifiedGalleryImageId,
      setSelectedId: (imageId) => {
        selectedSolidifiedGalleryImageId = imageId;
      },
      getLastWidth: () => lastSolidifiedLibraryListWidth,
      setLastWidth: (width) => {
        lastSolidifiedLibraryListWidth = width;
      },
      getResizeTimer: () => solidifiedLibraryRenderResizeTimer,
      setResizeTimer: (timer) => {
        solidifiedLibraryRenderResizeTimer = timer;
      },
    };
  }
  return {
    source: MANUAL_LIBRARY_SOURCE,
    images: libraryImages,
    list: els.libraryList,
    meta: els.libraryMeta,
    empty: els.emptyLibraryText,
    listModeButton: els.libraryListModeButton,
    galleryModeButton: els.libraryGalleryModeButton,
    getViewMode: () => libraryViewMode,
    setViewModeValue: (mode) => {
      libraryViewMode = mode;
    },
    getSelectedId: () => selectedGalleryImageId,
    setSelectedId: (imageId) => {
      selectedGalleryImageId = imageId;
    },
    getLastWidth: () => lastLibraryListWidth,
    setLastWidth: (width) => {
      lastLibraryListWidth = width;
    },
    getResizeTimer: () => libraryRenderResizeTimer,
    setResizeTimer: (timer) => {
      libraryRenderResizeTimer = timer;
    },
  };
}

function syncSelectedGalleryImage(source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  const selectedId = String(state.getSelectedId() || "").trim();
  if (!selectedId) {
    state.setSelectedId("");
    return;
  }
  if (!state.images.some((image) => String(image?.id || "").trim() === selectedId)) {
    state.setSelectedId("");
  }
}

function updateLibraryModeButtons(source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  const galleryMode = state.getViewMode() === "gallery";
  state.listModeButton.setAttribute("aria-pressed", String(!galleryMode));
  state.galleryModeButton.setAttribute("aria-pressed", String(galleryMode));
}

function setLibraryViewMode(mode, source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  const nextMode = mode === "gallery" ? "gallery" : "list";
  if (state.getViewMode() === nextMode) {
    updateLibraryModeButtons(source);
    return;
  }
  state.setViewModeValue(nextMode);
  renderLibraryPreservingScroll(source);
}

function scheduleLibraryRender(source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  if (state.getViewMode() !== "gallery") {
    return;
  }
  const nextWidth = Math.round(
    state.list.getBoundingClientRect().width || state.list.clientWidth || 0,
  );
  if (nextWidth && nextWidth === state.getLastWidth()) {
    return;
  }
  if (state.getResizeTimer()) {
    window.clearTimeout(state.getResizeTimer());
  }
  const timer = window.setTimeout(() => {
    state.setResizeTimer(0);
    const measuredWidth = Math.round(
      state.list.getBoundingClientRect().width || state.list.clientWidth || 0,
    );
    if (measuredWidth && measuredWidth === state.getLastWidth()) {
      return;
    }
    const currentColumns = Number.parseInt(
      state.list.dataset.galleryColumns || "0",
      10,
    );
    const nextColumns = getGalleryColumns(state.list);
    if (nextColumns === currentColumns) {
      state.setLastWidth(measuredWidth);
      return;
    }
    deferLibraryRenderUntilScrollIdle(source);
  }, 120);
  state.setResizeTimer(timer);
}

function getGalleryColumns(listEl = els.libraryList) {
  const width = listEl.getBoundingClientRect().width || listEl.clientWidth || 0;
  if (!width) {
    return 3;
  }
  const cardMinWidth = 90;
  const gap = 12;
  return Math.min(6, Math.max(3, Math.floor((width + gap) / (cardMinWidth + gap))));
}

function createGalleryIconButton(className, icon, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.innerHTML = icon;
  button.setAttribute("aria-label", label);
  button.title = label;
  return button;
}

function createGalleryCard(image, isSelected, source = MANUAL_LIBRARY_SOURCE) {
  const card = document.createElement("div");
  card.className = isSelected ? "gallery-card is-selected" : "gallery-card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-pressed", String(!!isSelected));
  card.setAttribute("aria-label", image.filename || image.rel_path || "图片");
  card.dataset.galleryImageId = String(image?.id || "").trim();

  const thumb = document.createElement("img");
  thumb.className = "gallery-thumb";
  thumb.alt = image.filename || image.rel_path;
  thumb.loading = "lazy";
  thumb.decoding = "async";
  applyResolvedImageUrl(thumb, image);

  const deleteButton = createGalleryIconButton(
    "gallery-delete-button",
    LIBRARY_MODE_ICONS.trash,
    "删除",
  );
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteImage(image, deleteButton, source);
  });

  card.addEventListener("click", () => {
    toggleGallerySelection(image, source);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleGallerySelection(image, source);
    }
  });

  card.append(thumb, deleteButton);
  return card;
}

function setDeleteButtonBusyState(button, busy) {
  button.disabled = busy;
  if (button.classList.contains("gallery-delete-button")) {
    button.setAttribute("aria-label", busy ? "删除中" : "删除");
    button.title = busy ? "删除中" : "删除";
    button.innerHTML = LIBRARY_MODE_ICONS.trash;
    return;
  }
  button.textContent = busy ? "删除中" : "删除";
}

function createGalleryDetailRow(image, source = MANUAL_LIBRARY_SOURCE) {
  const row = document.createElement("div");
  row.className = "gallery-detail-row";

  const main = document.createElement("button");
  main.type = "button";
  main.className = "gallery-detail-main";

  const path = document.createElement("div");
  path.className = "gallery-detail-path";
  path.textContent = image.filename || image.rel_path;

  const relPath = document.createElement("div");
  relPath.className = "gallery-detail-rel-path";
  relPath.textContent = image.rel_path;

  const tags = document.createElement("div");
  tags.className = "tag-list gallery-detail-tags";
  for (const tag of image.merged_tags || image.tags || []) {
    tags.appendChild(tagChip(tag));
  }

  main.append(path, relPath, tags);
  main.addEventListener("click", () => openEditor(image));
  main.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openEditor(image);
    }
  });

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.className = "gallery-detail-edit";
  editButton.textContent = "编辑标签";
  editButton.addEventListener("click", (event) => {
    event.stopPropagation();
    openEditor(image);
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "danger-button gallery-detail-delete";
  deleteButton.textContent = "删除";
  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteImage(image, deleteButton, source);
  });

  row.addEventListener("click", (event) => {
    if (event.target === row) {
      openEditor(image);
    }
  });

  row.append(main, editButton, deleteButton);
  return row;
}

function renderLibraryListMode(source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  for (const image of state.images) {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "library-row";
    row.addEventListener("click", () => openEditor(image));

    const thumb = document.createElement("img");
    thumb.className = "thumb";
    thumb.alt = image.filename || image.rel_path;
    thumb.loading = "lazy";
    thumb.decoding = "async";
    applyResolvedImageUrl(thumb, image);

    const content = document.createElement("div");
    content.className = "library-row-content";

    const path = document.createElement("div");
    path.className = "image-path";
    path.textContent = image.rel_path;

    const tags = document.createElement("div");
    tags.className = "tag-list";
    for (const tag of image.merged_tags || image.tags || []) {
      tags.appendChild(tagChip(tag));
    }

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "danger-button";
    deleteButton.textContent = "删除";
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      deleteImage(image, deleteButton, source);
    });

    content.append(path, tags);
    row.append(thumb, content, deleteButton);
    state.list.appendChild(row);
  }
}

function toggleGallerySelection(image, source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  const imageId = String(image?.id || "").trim();
  if (!imageId) {
    return;
  }
  state.setSelectedId(state.getSelectedId() === imageId ? "" : imageId);
  syncGallerySelectionView(source);
}

function renderLibraryGalleryMode(source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  const columns = getGalleryColumns(state.list);
  state.list.dataset.galleryColumns = String(columns);
  state.setLastWidth(
    Math.round(
      state.list.getBoundingClientRect().width || state.list.clientWidth || 0,
    ),
  );
  const selectedId = String(state.getSelectedId() || "").trim();
  const groups = [];
  for (let index = 0; index < state.images.length; index += columns) {
    groups.push(state.images.slice(index, index + columns));
  }

  for (const group of groups) {
    const rowGroup = document.createElement("div");
    rowGroup.className = "gallery-row-group";
    rowGroup.style.setProperty("--gallery-columns", String(columns));

    const row = document.createElement("div");
    row.className = "gallery-row";

    let selectedImage = null;
    for (const image of group) {
      const imageId = String(image?.id || "").trim();
      const card = createGalleryCard(
        image,
        imageId && imageId === selectedId,
        source,
      );
      if (imageId && imageId === selectedId) {
        selectedImage = image;
      }
      row.appendChild(card);
    }

    rowGroup.appendChild(row);
    if (selectedImage) {
      rowGroup.appendChild(createGalleryDetailRow(selectedImage, source));
    }
    state.list.appendChild(rowGroup);
  }
}

function syncGallerySelectionView(source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  if (state.getViewMode() !== "gallery") {
    return;
  }

  const selectedId = String(state.getSelectedId() || "").trim();
  const rowGroups = Array.from(state.list.querySelectorAll(".gallery-row-group"));
  let selectedGroup = null;

  for (const group of rowGroups) {
    const existingDetail = group.querySelector(".gallery-detail-row");
    if (existingDetail) {
      existingDetail.remove();
    }

    const cards = Array.from(group.querySelectorAll(".gallery-card"));
    for (const card of cards) {
      const cardId = String(card.dataset.galleryImageId || "").trim();
      const isSelected = Boolean(selectedId) && cardId === selectedId;
      card.classList.toggle("is-selected", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));
      if (isSelected) {
        selectedGroup = group;
      }
    }
  }

  if (!selectedId || !selectedGroup) {
    return;
  }

  const selectedImage = state.images.find(
    (image) => String(image?.id || "").trim() === selectedId,
  );
  if (!selectedImage) {
    return;
  }

  selectedGroup.appendChild(createGalleryDetailRow(selectedImage, source));
}

function renderLibrary(source = MANUAL_LIBRARY_SOURCE) {
  const state = getLibraryState(source);
  state.list.replaceChildren();
  if (source === SOLIDIFIED_LIBRARY_SOURCE) {
    renderSolidifiedLibraryCount();
  } else {
    state.meta.textContent = `${state.images.length} 张`;
  }
  state.empty.classList.toggle("is-hidden", state.images.length > 0);
  syncSelectedGalleryImage(source);
  updateLibraryModeButtons(source);
  state.list.classList.toggle("is-gallery-mode", state.getViewMode() === "gallery");
  if (state.getViewMode() !== "gallery") {
    delete state.list.dataset.galleryColumns;
    state.setLastWidth(0);
  }

  if (!state.images.length) {
    return;
  }

  if (state.getViewMode() === "gallery") {
    renderLibraryGalleryMode(source);
    return;
  }

  renderLibraryListMode(source);
}

function renderGlobalTagsEditor() {
  els.globalTagsMeta.textContent = `${globalTags.length} 个`;
  if (!globalTagsDirty) {
    els.globalTagsInput.value = globalTags.join("\n");
  }
  renderGlobalTagsPreview();
}

function renderGlobalTagsPreview() {
  els.globalTagsPreview.replaceChildren();
  const previewTags = normalizeTags(els.globalTagsInput.value);
  if (!previewTags.length) {
    const empty = document.createElement("span");
    empty.className = "empty-text inline";
    empty.textContent = "暂无公用特征标签。";
    els.globalTagsPreview.appendChild(empty);
    return;
  }
  for (const tag of previewTags) {
    els.globalTagsPreview.appendChild(tagChip(tag));
  }
}

function librarySignature(images, tags) {
  const imagePart = (Array.isArray(images) ? images : [])
    .map((image) =>
      [
        String(image?.id || ""),
        String(image?.rel_path || ""),
        String(image?.mtime || ""),
        String(image?.size || ""),
        JSON.stringify(image?.tags || []),
        JSON.stringify(image?.selected_global_tags || []),
        JSON.stringify(image?.merged_tags || []),
      ].join("|"),
    )
    .join("\n");
  return `${imagePart}\n::global::${JSON.stringify(Array.isArray(tags) ? tags : [])}`;
}

function pendingPoolSignature(images) {
  return (Array.isArray(images) ? images : [])
    .map((image) =>
      [
        String(image?.id || ""),
        String(image?.rel_path || ""),
        String(image?.mtime || ""),
        String(image?.size || ""),
        String(image?.collected_at || ""),
      ].join("|"),
    )
    .join("\n");
}

function applyLibraryState(library, options = {}) {
  const nextImages = Array.isArray(library?.manual_images)
    ? library.manual_images
    : Array.isArray(library?.images)
      ? library.images
      : [];
  const nextSolidifiedImages = Array.isArray(library?.solidified_images)
    ? library.solidified_images
    : [];
  const nextGlobalTags = Array.isArray(library?.global_tags)
    ? library.global_tags
    : [];
  const nextSignature = [
    librarySignature(nextImages, nextGlobalTags),
    "::solidified::",
    librarySignature(nextSolidifiedImages, nextGlobalTags),
  ].join("\n");
  const force = options.force === true;
  const changed = force || nextSignature !== renderedLibrarySignature;

  libraryImages = nextImages;
  solidifiedLibraryImages = nextSolidifiedImages;
  globalTags = nextGlobalTags;
  syncSelectedGalleryImage(MANUAL_LIBRARY_SOURCE);
  syncSelectedGalleryImage(SOLIDIFIED_LIBRARY_SOURCE);

  if (!changed) {
    return false;
  }

  renderedLibrarySignature = nextSignature;
  renderGlobalTagsEditor();
  if (isPageScrolling) {
    deferLibraryRenderUntilScrollIdle(MANUAL_LIBRARY_SOURCE);
    deferLibraryRenderUntilScrollIdle(SOLIDIFIED_LIBRARY_SOURCE);
  } else {
    renderLibraryPreservingScroll(MANUAL_LIBRARY_SOURCE);
    renderLibraryPreservingScroll(SOLIDIFIED_LIBRARY_SOURCE);
  }
  return true;
}

function applyPendingPoolState(pool, options = {}) {
  const nextImages = Array.isArray(pool?.images) ? pool.images : [];
  if (pool?.config && typeof pool.config === "object") {
    autoCollectionConfigCache = {
      ...autoCollectionConfigCache,
      ...pool.config,
    };
    renderSolidifiedLibraryCount();
  }
  const nextSignature = pendingPoolSignature(nextImages);
  const force = options.force === true;
  const changed = force || nextSignature !== renderedPendingPoolSignature;

  pendingPoolImages = nextImages;
  const existingIds = new Set(nextImages.map((image) => String(image?.id || "")));
  selectedPendingImageIds = new Set(
    Array.from(selectedPendingImageIds).filter((imageId) => existingIds.has(imageId)),
  );

  if (!changed) {
    syncPendingSelectionView();
    return false;
  }

  renderedPendingPoolSignature = nextSignature;
  const position = captureScrollPosition();
  renderPendingPool();
  restoreScrollPosition(position);
  return true;
}

function syncPendingSelectionView() {
  const cards = Array.from(els.pendingPoolList.querySelectorAll(".pending-card"));
  for (const card of cards) {
    const imageId = String(card.dataset.pendingImageId || "").trim();
    const selected = selectedPendingImageIds.has(imageId);
    card.classList.toggle("is-selected", selected);
    const checkbox = card.querySelector("input[type='checkbox']");
    if (checkbox) {
      checkbox.checked = selected;
    }
  }
  const selectedCount = selectedPendingImageIds.size;
  els.pendingAcceptButton.disabled = selectedCount === 0;
  els.pendingDiscardButton.disabled = selectedCount === 0;
  els.pendingSelectAllButton.textContent =
    pendingPoolImages.length && selectedCount === pendingPoolImages.length
      ? "取消全选"
      : "全选";
}

function togglePendingSelection(imageId) {
  const normalizedId = String(imageId || "").trim();
  if (!normalizedId) {
    return;
  }
  if (selectedPendingImageIds.has(normalizedId)) {
    selectedPendingImageIds.delete(normalizedId);
  } else {
    selectedPendingImageIds.add(normalizedId);
  }
  syncPendingSelectionView();
}

function scrollToSolidifiedLibrary() {
  const target = els.solidifiedLibraryList?.closest(".solidified-library-panel");
  if (!target) {
    return;
  }
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function renderPendingPool() {
  els.pendingPoolList.replaceChildren();
  renderLimitedCount(
    els.pendingPoolMeta,
    pendingPoolImages.length,
    autoCollectionConfigCache.pending_pool_limit,
  );
  els.emptyPendingPoolText.classList.toggle(
    "is-hidden",
    pendingPoolImages.length > 0,
  );

  for (const image of pendingPoolImages) {
    const imageId = String(image?.id || "").trim();
    const card = document.createElement("label");
    card.className = "pending-card";
    card.dataset.pendingImageId = imageId;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedPendingImageIds.has(imageId);
    checkbox.addEventListener("change", (event) => {
      event.stopPropagation();
      togglePendingSelection(imageId);
    });

    const thumb = document.createElement("img");
    thumb.className = "pending-thumb";
    thumb.alt = image.filename || image.rel_path || "待筛选图片";
    thumb.loading = "lazy";
    thumb.decoding = "async";
    applyResolvedPendingImageUrl(thumb, image);

    const selectedOverlay = document.createElement("span");
    selectedOverlay.className = "pending-selected-overlay";
    selectedOverlay.innerHTML = PENDING_SELECTION_ICON;
    selectedOverlay.setAttribute("aria-hidden", "true");

    const thumbWrap = document.createElement("div");
    thumbWrap.className = "pending-thumb-wrap";
    thumbWrap.append(thumb, selectedOverlay);

    const meta = document.createElement("div");
    meta.className = "pending-card-meta";

    const filename = document.createElement("div");
    filename.className = "pending-card-title";
    filename.classList.add("pending-card-time");
    filename.textContent = formatPendingCollectionTime(image.collected_at);

    meta.append(filename);
    card.append(checkbox, thumbWrap, meta);
    card.addEventListener("click", (event) => {
      if (event.target !== checkbox) {
        event.preventDefault();
        togglePendingSelection(imageId);
      }
    });
    els.pendingPoolList.appendChild(card);
  }

  syncPendingSelectionView();
}

async function refreshLibrary() {
  const library = await pluginApiGet("caption_library");
  applyLibraryState(library);
}

async function refreshPendingPool() {
  const pool = await pluginApiGet("auto_collection_pool");
  applyPendingPoolState(pool);
}

async function refreshAll() {
  try {
    const progress = await pluginApiGet("caption_progress");
    renderProgress(progress || {});
    await refreshLibrary();
    await refreshPendingPool();
  } catch (error) {
    setStatus("failed");
    setMessage(`读取进度失败：${error.message || error}`);
  }
}

function openEditor(image) {
  lockEditorBackgroundScroll();
  editingImage = image;
  els.editorTitle.textContent = image.rel_path;
  els.editorImage.alt = image.filename || image.rel_path;
  applyResolvedImageUrl(els.editorImage, image);
  els.tagInput.value = (image.tags || []).join("\n");
  els.editorMessage.textContent = "";
  renderGlobalTagChoices(image.selected_global_tags || []);
  els.editorOverlay.classList.remove("is-hidden");
}

function closeEditor() {
  editingImage = null;
  els.editorOverlay.classList.add("is-hidden");
  unlockEditorBackgroundScroll();
}

function openImportDialog() {
  els.importFileInput.value = "";
  els.importModeMerge.checked = true;
  els.importOverwriteConfig.checked = false;
  els.importMessage.textContent = "";
  els.importOverlay.classList.remove("is-hidden");
}

function closeImportDialog() {
  els.importOverlay.classList.add("is-hidden");
  els.importMessage.textContent = "";
}

async function openExportDialog() {
  els.exportDialogMessage.textContent = "正在读取备份列表...";
  els.exportOverlay.classList.remove("is-hidden");
  setExportBusy(false);
  try {
    await refreshScheduledBackups();
    els.exportDialogMessage.textContent = "";
  } catch (error) {
    els.exportDialogMessage.textContent = `读取备份列表失败：${error.message || error}`;
  }
}

function closeExportDialog() {
  els.exportOverlay.classList.add("is-hidden");
  els.exportDialogMessage.textContent = "";
  setExportBusy(false);
}

function setExportBusy(busy) {
  els.exportProgressBar.classList.toggle("is-hidden", !busy);
  els.exportManualButton.disabled = busy;
  els.exportCancelButton.disabled = busy;
  els.exportCloseButton.disabled = busy;
}

function applyScheduledBackupState(state) {
  scheduledBackupState = {
    ...scheduledBackupState,
    ...(state || {}),
    backup_files: Array.isArray(state?.backup_files) ? state.backup_files : [],
  };
  renderScheduledBackupConfigList();
  renderExportBackupList();
}

async function refreshScheduledBackups() {
  const state = await pluginApiGet("scheduled_backup_list");
  applyScheduledBackupState(state || {});
}

function createScheduledBackupRow(item) {
  const row = document.createElement("div");
  row.className = "backup-file-item";

  const info = document.createElement("div");
  info.className = "backup-file-info";
  const name = document.createElement("strong");
  name.textContent = item.filename || "-";
  const meta = document.createElement("span");
  const version = item.version || extractBackupVersion(item.filename);
  const versionLabel = document.createElement("span");
  versionLabel.className = "backup-file-version";
  if (!version || version.toLowerCase() !== PLUGIN_VERSION.toLowerCase()) {
    versionLabel.classList.add("is-outdated");
  }
  versionLabel.textContent = version || "未知版本";
  meta.append(
    document.createTextNode(`${item.created_at_text || "-"} | `),
    versionLabel,
    document.createTextNode(` | ${formatBytes(item.size)}`),
  );
  info.append(name, meta);

  const actions = document.createElement("div");
  actions.className = "backup-file-actions";
  const download = document.createElement("button");
  download.type = "button";
  download.textContent = "下载";
  download.addEventListener("click", () => downloadScheduledBackup(item));
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "danger-button";
  remove.textContent = "删除";
  remove.addEventListener("click", () => deleteScheduledBackup(item));
  actions.append(download, remove);

  row.append(info, actions);
  return row;
}

function renderScheduledBackupConfigList() {
  els.scheduledBackupConfigList.replaceChildren();
  const files = scheduledBackupState.backup_files || [];
  if (!files.length) {
    const empty = document.createElement("p");
    empty.className = "empty-text inline";
    empty.textContent = "暂无备份。";
    els.scheduledBackupConfigList.appendChild(empty);
    return;
  }
  for (const item of files) {
    els.scheduledBackupConfigList.appendChild(createScheduledBackupRow(item));
  }
}

function renderExportBackupList() {
  els.exportBackupList.replaceChildren();
  const files = (scheduledBackupState.backup_files || []).slice(0, 3);
  els.emptyExportBackupText.classList.toggle("is-hidden", files.length > 0);
  for (const item of files) {
    els.exportBackupList.appendChild(createScheduledBackupRow(item));
  }
}

function openCapacityWarningDialog(capacity, imageIds) {
  pendingCapacityActionImageIds = Array.isArray(imageIds) ? imageIds : [];
  const limit = asInt(capacity?.limit);
  const current = asInt(capacity?.current);
  const selected = asInt(capacity?.selected);
  const overflow = asInt(capacity?.overflow);
  els.capacityWarningText.textContent =
    `当前固化图像库上限为 ${limit} 张，已有 ${current} 张，本次预计入库 ${selected} 张，超出 ${overflow} 张。请选择处理方式。`;
  els.solidifiedCapacityOverlay.classList.remove("is-hidden");
}

function closeCapacityWarningDialog(clearSelection = true) {
  pendingCapacityActionImageIds = [];
  els.solidifiedCapacityOverlay.classList.add("is-hidden");
  if (clearSelection) {
    selectedPendingImageIds.clear();
    syncPendingSelectionView();
  }
}

async function openUploadDialog() {
  els.uploadMessage.textContent = "";
  els.uploadOverlay.classList.remove("is-hidden");
}

async function openUploadDialogWithProviderCheck() {
  if (uploadProviderCheckInProgress) {
    return;
  }
  uploadProviderCheckInProgress = true;
  try {
    const config = await pluginApiGet("caption_provider_config");
    if (String(config?.provider_id || "").trim()) {
      await openUploadDialog();
      return;
    }
    openProviderWarningDialog(config || {});
  } catch (error) {
    openProviderWarningDialog({
      provider_id: "",
      provider_options: [],
      load_error: error.message || String(error),
    });
  } finally {
    uploadProviderCheckInProgress = false;
  }
}

function closeUploadDialog() {
  els.uploadOverlay.classList.add("is-hidden");
  els.uploadMessage.textContent = "";
}

function fillProviderSelect(selectEl, config) {
  const options = Array.isArray(config.provider_options)
    ? config.provider_options
    : [];
  const selectedId = String(
    config.default_image_caption_provider_id || config.provider_id || "",
  );
  selectEl.replaceChildren();

  const warningOption = document.createElement("option");
  warningOption.value = "";
  warningOption.textContent = "需要选择一个可用的图片转述模型";
  warningOption.selected = selectedId === "";
  warningOption.className = "provider-warning-option";
  selectEl.appendChild(warningOption);

  for (const item of options) {
    const providerId = String(item.id || "");
    if (!providerId) {
      continue;
    }
    const option = document.createElement("option");
    option.value = providerId;
    option.textContent = item.label || providerId;
    option.selected = providerId === selectedId;
    selectEl.appendChild(option);
  }
  return selectedId;
}

function fillCaptionProviderSelect(config) {
  const selectedId = fillProviderSelect(els.captionProviderInput, config);
  renderCaptionProviderWarning(selectedId);
}

function renderCaptionProviderWarning(providerId) {
  const missing = !String(providerId || "").trim();
  els.captionProviderInput.classList.toggle("warning-select", missing);
  els.captionProviderWarning.classList.toggle("is-hidden", !missing);
}

function renderWarningCaptionProviderWarning(providerId) {
  const missing = !String(providerId || "").trim();
  els.warningCaptionProviderInput.classList.toggle("warning-select", missing);
  els.warningCaptionProviderHint.classList.toggle("is-hidden", !missing);
}

function fillProviderWarningDialog(config) {
  warningProviderConfig = config || {};
  const selectedId = fillProviderSelect(
    els.warningCaptionProviderInput,
    warningProviderConfig,
  );
  renderWarningCaptionProviderWarning(selectedId);
  if (warningProviderConfig.load_error) {
    els.providerWarningMessage.textContent = `读取模型配置失败：${warningProviderConfig.load_error}`;
  } else if (selectedId) {
    els.providerWarningMessage.textContent = "图片转述模型已配置，可以继续上传。";
  } else {
    els.providerWarningMessage.textContent = "";
  }
}

function openProviderWarningDialog(config) {
  fillProviderWarningDialog(config || {});
  els.providerWarningOverlay.classList.remove("is-hidden");
}

function closeProviderWarningDialog() {
  els.providerWarningOverlay.classList.add("is-hidden");
  els.providerWarningMessage.textContent = "";
}

async function saveProviderWarningSelection() {
  const providerId = els.warningCaptionProviderInput.value;
  renderWarningCaptionProviderWarning(providerId);
  els.warningCaptionProviderInput.disabled = true;
  els.providerWarningContinueButton.disabled = true;
  els.providerWarningMessage.textContent = "正在保存图片转述模型设置...";
  let saved = false;
  try {
    const config = await pluginApiPost("caption_provider_config", {
      provider_id: providerId,
    });
    warningProviderConfig = config || {};
    if (tagCategorySettings) {
      tagCategorySettings.default_image_caption_provider_id =
        warningProviderConfig.provider_id || "";
      tagCategorySettings.provider_id = warningProviderConfig.provider_id || "";
    }
    fillProviderWarningDialog(warningProviderConfig);
    els.providerWarningMessage.textContent = providerId
      ? "图片转述模型设置已保存。"
      : "已清空图片转述模型设置。";
    saved = true;
  } catch (error) {
    els.providerWarningMessage.textContent = `保存失败：${error.message || error}`;
  } finally {
    els.warningCaptionProviderInput.disabled = false;
    els.providerWarningContinueButton.disabled = false;
  }
  return saved;
}

async function continueFromProviderWarning() {
  const providerId = String(els.warningCaptionProviderInput.value || "").trim();
  if (!providerId) {
    renderWarningCaptionProviderWarning("");
    els.providerWarningMessage.textContent =
      "请先选择一个可用的默认图片转述模型。";
    return;
  }
  const savedProviderId = String(warningProviderConfig?.provider_id || "").trim();
  if (savedProviderId !== providerId) {
    const saved = await saveProviderWarningSelection();
    if (!saved) {
      return;
    }
  }
  closeProviderWarningDialog();
  await openUploadDialog();
}

async function openTagCategoryDialog() {
  els.tagCategoryMessage.textContent = "正在读取配置...";
  els.tagCategorySaveButton.disabled = true;
  els.tagCategoryRecaptionInput.checked = false;
  els.tagCategoryOverlay.classList.remove("is-hidden");
  try {
    const settings = await pluginApiGet("caption_tag_category_settings");
    fillTagCategoryDialog(settings || {});
    els.tagCategoryMessage.textContent = "";
  } catch (error) {
    els.tagCategoryMessage.textContent = `读取配置失败：${error.message || error}`;
  } finally {
    els.tagCategorySaveButton.disabled = false;
  }
}

function closeTagCategoryDialog() {
  els.tagCategoryOverlay.classList.add("is-hidden");
  els.tagCategoryMessage.textContent = "";
  els.tagCategoryRecaptionInput.checked = false;
}

function fillTagCategoryDialog(settings) {
  tagCategorySettings = settings;
  const presetCategories = settings.preset_categories || {};
  const enabledPresets = Array.isArray(settings.enabled_presets)
    ? settings.enabled_presets
    : [];
  fillCaptionProviderSelect(settings || {});
  els.tagCategoryPresetChoices.replaceChildren();
  for (const [key, labelText] of Object.entries(presetCategories)) {
    const label = document.createElement("label");
    label.className = "preset-category-option";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = key;
    input.checked = enabledPresets.includes(key);

    const text = document.createElement("span");
    text.textContent = labelText;

    label.append(input, text);
    els.tagCategoryPresetChoices.appendChild(label);
  }
  els.tagCategoryCustomInput.value = Array.isArray(settings.custom_categories)
    ? settings.custom_categories.join(" ")
    : "";
  els.tagCategoryRecaptionInput.checked = false;
}

function readTagCategoryDialog() {
  return {
    default_image_caption_provider_id: els.captionProviderInput.value,
    enabled_presets: Array.from(
      els.tagCategoryPresetChoices.querySelectorAll(
        "input[type='checkbox']:checked",
      ),
    ).map((input) => input.value),
    custom_categories: normalizeTags(els.tagCategoryCustomInput.value),
    recaption_all: els.tagCategoryRecaptionInput.checked,
  };
}

function tagCategoryConfigChanged(nextSettings) {
  const current = tagCategorySettings || {};
  const currentEnabled = Array.isArray(current.enabled_presets)
    ? current.enabled_presets
    : [];
  const nextEnabled = Array.isArray(nextSettings.enabled_presets)
    ? nextSettings.enabled_presets
    : [];
  const currentCustom = Array.isArray(current.custom_categories)
    ? current.custom_categories
    : [];
  const nextCustom = Array.isArray(nextSettings.custom_categories)
    ? nextSettings.custom_categories
    : [];
  return (
    JSON.stringify(currentEnabled) !== JSON.stringify(nextEnabled) ||
    JSON.stringify(currentCustom) !== JSON.stringify(nextCustom)
  );
}

function captionProviderConfigChanged(nextSettings) {
  const current = tagCategorySettings || {};
  return (
    String(current.default_image_caption_provider_id || "") !==
    String(nextSettings.default_image_caption_provider_id || "")
  );
}

async function openProactiveEmojiDialog() {
  els.proactiveEmojiMessage.textContent = "正在读取配置...";
  els.proactiveEmojiSaveButton.disabled = true;
  els.proactiveEmojiOverlay.classList.remove("is-hidden");
  try {
    const config = await pluginApiGet("proactive_emoji_config");
    fillProactiveEmojiDialog(config || {});
    els.proactiveEmojiMessage.textContent = "";
  } catch (error) {
    els.proactiveEmojiMessage.textContent = `读取配置失败：${error.message || error}`;
  } finally {
    els.proactiveEmojiSaveButton.disabled = false;
  }
}

function closeProactiveEmojiDialog() {
  els.proactiveEmojiOverlay.classList.add("is-hidden");
  els.proactiveEmojiMessage.textContent = "";
}

function fillProactiveEmojiDialog(config) {
  els.proactiveEmojiEnabledInput.checked = config.enabled === true;
  els.proactiveEmojiMemeOnlyInput.checked = config.meme_only !== false;
  els.proactiveEmojiEmbedInput.checked = config.embed_in_conversation !== false;
  els.proactiveEmojiProbabilityInput.value = String(
    config.trigger_probability ?? "0.25",
  );
  renderProactiveEmojiProviderOptions(
    Array.isArray(config.provider_options) ? config.provider_options : [],
    config.analysis_provider_id || "",
  );
}

function renderProactiveEmojiProviderOptions(options, selectedId) {
  els.proactiveEmojiProviderInput.replaceChildren();
  const normalizedOptions = options.length
    ? options
    : [{ id: "", label: "继承 AstrBot 当前会话模型" }];
  for (const item of normalizedOptions) {
    const option = document.createElement("option");
    option.value = String(item.id || "");
    option.textContent = item.label || item.id || "继承 AstrBot 当前会话模型";
    option.selected = option.value === String(selectedId || "");
    els.proactiveEmojiProviderInput.appendChild(option);
  }
}

function readProactiveEmojiDialog() {
  return {
    enabled: els.proactiveEmojiEnabledInput.checked,
    analysis_provider_id: els.proactiveEmojiProviderInput.value,
    meme_only: els.proactiveEmojiMemeOnlyInput.checked,
    embed_in_conversation: els.proactiveEmojiEmbedInput.checked,
    trigger_probability: String(
      clampProbability(els.proactiveEmojiProbabilityInput.value),
    ),
  };
}

async function openAutoCollectionDialog() {
  els.autoCollectionMessage.textContent = "正在读取配置...";
  els.autoCollectionSaveButton.disabled = true;
  els.autoCollectionOverlay.classList.remove("is-hidden");
  try {
    const config = await pluginApiGet("auto_collection_config");
    fillAutoCollectionDialog(config || {});
    els.autoCollectionMessage.textContent = "";
  } catch (error) {
    els.autoCollectionMessage.textContent = `读取配置失败：${error.message || error}`;
  } finally {
    els.autoCollectionSaveButton.disabled = false;
  }
}

function closeAutoCollectionDialog() {
  els.autoCollectionOverlay.classList.add("is-hidden");
  els.autoCollectionMessage.textContent = "";
}

function fillAutoCollectionDialog(config) {
  els.autoCollectionEnabledInput.checked = config.enabled === true;
  els.autoCollectionIncludeInput.checked = config.include_in_features === true;
  els.autoCollectionGroupsInput.value = Array.isArray(config.source_groups)
    ? config.source_groups.join("\n")
    : "";
  els.autoCollectionMaxSizeInput.value = String(config.max_file_size_kb ?? 1024);
  els.autoCollectionPendingLimitInput.value = String(
    config.pending_pool_limit ?? 100,
  );
  els.autoCollectionTtlInput.value = String(config.pending_ttl_days ?? 3);
  els.autoCollectionAutoAcceptInput.checked = config.auto_accept === true;
  els.autoCollectionRejectDiscardedInput.checked =
    config.auto_reject_discarded === true;
  els.autoCollectionSolidifiedLimitInput.value = String(
    config.solidified_library_limit ?? 300,
  );
}

function readAutoCollectionDialog() {
  return {
    enabled: els.autoCollectionEnabledInput.checked,
    include_in_features: els.autoCollectionIncludeInput.checked,
    source_groups: normalizeTags(els.autoCollectionGroupsInput.value),
    max_file_size_kb: clampInt(els.autoCollectionMaxSizeInput.value, 1024, 1),
    pending_pool_limit: clampInt(
      els.autoCollectionPendingLimitInput.value,
      100,
      0,
    ),
    pending_ttl_days: clampInt(els.autoCollectionTtlInput.value, 3, 0),
    auto_accept: els.autoCollectionAutoAcceptInput.checked,
    auto_reject_discarded: els.autoCollectionRejectDiscardedInput.checked,
    solidified_library_limit: clampInt(
      els.autoCollectionSolidifiedLimitInput.value,
      300,
      -1,
    ),
  };
}

async function openUserSearchDialog() {
  els.userSearchMessage.textContent = "正在读取配置...";
  els.userSearchSaveButton.disabled = true;
  els.userSearchOverlay.classList.remove("is-hidden");
  try {
    const config = await pluginApiGet("caption_plugin_config");
    fillUserSearchDialog(config || {});
    els.userSearchMessage.textContent = "";
  } catch (error) {
    els.userSearchMessage.textContent = `读取配置失败：${error.message || error}`;
  } finally {
    els.userSearchSaveButton.disabled = false;
  }
}

function closeUserSearchDialog() {
  els.userSearchOverlay.classList.add("is-hidden");
  els.userSearchMessage.textContent = "";
}

function fillUserSearchDialog(config) {
  const reply = config.reply_after_search || {};
  const flow = config.user_search_flow || {};
  const keywords = Array.isArray(flow.request_keywords)
    ? flow.request_keywords
    : config.request_keywords;
  els.userSearchEnabledInput.checked = flow.enabled !== undefined
    ? flow.enabled !== false
    : config.user_search_enabled !== false;
  els.configKeywordsInput.value = Array.isArray(keywords)
    ? keywords.join("\n")
    : "";
  els.configUseCustomReplyInput.checked = reply.use_custom_reply !== false;
  els.configCustomReplyInput.value =
    reply.custom_reply || "找到一张比较合适的图。";
  els.configLlmReplyWhenNotFoundInput.checked =
    reply.llm_reply_when_not_found === true;
  els.configNotFoundReplyInput.value =
    reply.not_found_reply || "图库里暂时没有找到特别合适的图片。";
  els.configEmptyLibraryReplyInput.value =
    reply.empty_library_reply ||
    "图库里还没有可用图片，请先在插件配置里上传图片。";
}

function readUserSearchDialog() {
  return {
    user_search_flow: {
      enabled: els.userSearchEnabledInput.checked,
      request_keywords: normalizeTags(els.configKeywordsInput.value),
    },
    reply_after_search: {
      use_custom_reply: els.configUseCustomReplyInput.checked,
      custom_reply: els.configCustomReplyInput.value.trim(),
      llm_reply_when_not_found: els.configLlmReplyWhenNotFoundInput.checked,
      not_found_reply: els.configNotFoundReplyInput.value.trim(),
      empty_library_reply: els.configEmptyLibraryReplyInput.value.trim(),
    },
  };
}

async function openConfigDialog() {
  els.configMessage.textContent = "正在读取配置...";
  els.configSaveButton.disabled = true;
  els.configOverlay.classList.remove("is-hidden");
  try {
    const [config, backupState] = await Promise.all([
      pluginApiGet("caption_plugin_config"),
      pluginApiGet("scheduled_backup_list"),
    ]);
    applyScheduledBackupState(backupState || {});
    fillConfigDialog(config || {});
    els.configMessage.textContent = "";
  } catch (error) {
    els.configMessage.textContent = `读取配置失败：${error.message || error}`;
  } finally {
    els.configSaveButton.disabled = false;
  }
}

function closeConfigDialog() {
  els.configOverlay.classList.add("is-hidden");
  els.configMessage.textContent = "";
}

function fillConfigDialog(config) {
  els.configHiddenImagesInput.value = Array.isArray(config.hidden_images)
    ? config.hidden_images.join("\n")
    : "";
  els.configSyncOnStartupInput.checked = config.sync_on_startup !== false;
  els.configConfidenceInput.value = clampConfidence(
    config.match_confidence_threshold,
  ).toFixed(2);
  const backupConfig = config.scheduled_backup || scheduledBackupState;
  scheduledBackupState = {
    ...scheduledBackupState,
    ...(backupConfig || {}),
    backup_files: scheduledBackupState.backup_files || [],
  };
  els.scheduledBackupEnabledInput.checked = backupConfig?.enabled !== false;
  els.scheduledBackupTimeInput.value = normalizeBackupTime(
    backupConfig?.backup_time || "06:00",
  );
  els.scheduledBackupLimitInput.value = String(
    clampInt(backupConfig?.backup_limit, 3, 1),
  );
  renderScheduledBackupConfigList();
}

function readConfigDialog() {
  return {
    hidden_images: normalizePathList(els.configHiddenImagesInput.value),
    sync_on_startup: els.configSyncOnStartupInput.checked,
    match_confidence_threshold: clampConfidence(els.configConfidenceInput.value),
    scheduled_backup: {
      enabled: els.scheduledBackupEnabledInput.checked,
      backup_time: normalizeBackupTime(els.scheduledBackupTimeInput.value),
      backup_limit: clampInt(els.scheduledBackupLimitInput.value, 3, 1),
    },
  };
}

function renderGlobalTagChoices(selectedTags) {
  els.globalTagChoices.replaceChildren();
  if (!globalTags.length) {
    const empty = document.createElement("p");
    empty.className = "empty-text inline";
    empty.textContent = "暂无公共特征标签。";
    els.globalTagChoices.appendChild(empty);
    return;
  }

  for (const tag of globalTags) {
    const label = document.createElement("label");
    label.className = "global-tag-option";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = tag;
    input.checked = selectedTags.includes(tag);

    const text = document.createElement("span");
    text.textContent = tag;

    label.append(input, text);
    els.globalTagChoices.appendChild(label);
  }
}

function selectedGlobalTags() {
  return Array.from(
    els.globalTagChoices.querySelectorAll("input[type='checkbox']:checked"),
  ).map((input) => input.value);
}

async function saveEditor() {
  if (!editingImage) {
    return;
  }
  els.editorSaveButton.disabled = true;
  els.editorMessage.textContent = "正在保存...";
  try {
    const result = await pluginApiPost("caption_update_tags", {
      image_id: editingImage.id,
      library_source: editingImage.library_source || MANUAL_LIBRARY_SOURCE,
      tags: normalizeTags(els.tagInput.value),
      selected_global_tags: selectedGlobalTags(),
    });
    if (result?.library) {
      applyLibraryState(result.library, { force: true });
    } else {
      await refreshLibrary();
    }
    els.editorMessage.textContent = "已保存。";
    window.setTimeout(closeEditor, 350);
  } catch (error) {
    els.editorMessage.textContent = `保存失败：${error.message || error}`;
  } finally {
    els.editorSaveButton.disabled = false;
  }
}

async function saveGlobalTags() {
  els.globalTagsSaveButton.disabled = true;
  els.globalTagsMessage.textContent = "正在保存...";
  try {
    const result = await pluginApiPost("caption_update_global_tags", {
      global_tags: normalizeTags(els.globalTagsInput.value),
    });
    if (result?.library) {
      globalTagsDirty = false;
      applyLibraryState(result.library, { force: true });
    } else {
      await refreshLibrary();
    }
    els.globalTagsMessage.textContent = "已保存。";
    window.setTimeout(() => {
      els.globalTagsMessage.textContent = "";
    }, 1200);
  } catch (error) {
    els.globalTagsMessage.textContent = `保存失败：${error.message || error}`;
  } finally {
    els.globalTagsSaveButton.disabled = false;
  }
}

async function saveTagCategoryDialog() {
  const payload = readTagCategoryDialog();
  const changed = tagCategoryConfigChanged(payload);
  const providerChanged = captionProviderConfigChanged(payload);
  els.tagCategorySaveButton.disabled = true;
  els.tagCategoryCancelButton.disabled = true;
  els.tagCategoryMessage.textContent = "正在保存配置...";
  try {
    const result = await pluginApiPost("caption_tag_category_settings", payload);
    if (result?.settings) {
      fillTagCategoryDialog(result.settings);
    }
    if (result?.progress) {
      renderProgress(result.progress);
    }
    if (result?.library) {
      applyLibraryState(result.library, { force: true });
    }
    if (changed && payload.recaption_all) {
      els.tagCategoryMessage.textContent =
        "已保存，正在使用新的标签类别重新加载图库。";
      await refreshAll();
    } else if (changed) {
      els.tagCategoryMessage.textContent =
        "已保存。新的标签类别会应用于之后上传的新图片。";
    } else if (providerChanged) {
      els.tagCategoryMessage.textContent = "图片转述模型设置已保存。";
    } else {
      els.tagCategoryMessage.textContent = "配置没有变化。";
    }
    window.setTimeout(closeTagCategoryDialog, 650);
  } catch (error) {
    els.tagCategoryMessage.textContent = `保存配置失败：${error.message || error}`;
  } finally {
    els.tagCategorySaveButton.disabled = false;
    els.tagCategoryCancelButton.disabled = false;
  }
}

async function saveProactiveEmojiDialog() {
  els.proactiveEmojiSaveButton.disabled = true;
  els.proactiveEmojiCancelButton.disabled = true;
  els.proactiveEmojiMessage.textContent = "正在保存配置...";
  try {
    const config = await pluginApiPost(
      "proactive_emoji_config",
      readProactiveEmojiDialog(),
    );
    fillProactiveEmojiDialog(config || {});
    els.proactiveEmojiMessage.textContent = "已保存。";
    window.setTimeout(closeProactiveEmojiDialog, 350);
  } catch (error) {
    els.proactiveEmojiMessage.textContent = `保存配置失败：${error.message || error}`;
  } finally {
    els.proactiveEmojiSaveButton.disabled = false;
    els.proactiveEmojiCancelButton.disabled = false;
  }
}

async function saveAutoCollectionDialog() {
  els.autoCollectionSaveButton.disabled = true;
  els.autoCollectionCancelButton.disabled = true;
  els.autoCollectionMessage.textContent = "正在保存配置...";
  try {
    const config = await pluginApiPost(
      "auto_collection_config",
      readAutoCollectionDialog(),
    );
    autoCollectionConfigCache = {
      ...autoCollectionConfigCache,
      ...(config || {}),
    };
    fillAutoCollectionDialog(config || {});
    els.autoCollectionMessage.textContent = "已保存。";
    await refreshPendingPool();
    window.setTimeout(closeAutoCollectionDialog, 350);
  } catch (error) {
    els.autoCollectionMessage.textContent = `保存配置失败：${error.message || error}`;
  } finally {
    els.autoCollectionSaveButton.disabled = false;
    els.autoCollectionCancelButton.disabled = false;
  }
}

async function saveUserSearchDialog() {
  els.userSearchSaveButton.disabled = true;
  els.userSearchCancelButton.disabled = true;
  els.userSearchMessage.textContent = "正在保存配置...";
  try {
    const savedConfig = await pluginApiPost(
      "caption_plugin_config",
      readUserSearchDialog(),
    );
    fillUserSearchDialog(savedConfig || {});
    els.userSearchMessage.textContent = "已保存。";
    await refreshLibrary();
    window.setTimeout(closeUserSearchDialog, 350);
  } catch (error) {
    els.userSearchMessage.textContent = `保存配置失败：${error.message || error}`;
  } finally {
    els.userSearchSaveButton.disabled = false;
    els.userSearchCancelButton.disabled = false;
  }
}

async function saveConfigDialog() {
  els.configSaveButton.disabled = true;
  els.configCancelButton.disabled = true;
  els.configMessage.textContent = "正在保存配置...";
  try {
    const savedConfig = await pluginApiPost(
      "caption_plugin_config",
      readConfigDialog(),
    );
    fillConfigDialog(savedConfig || {});
    await refreshScheduledBackups();
    els.configMessage.textContent = "已保存。";
    await refreshLibrary();
    window.setTimeout(closeConfigDialog, 350);
  } catch (error) {
    els.configMessage.textContent = `保存配置失败：${error.message || error}`;
  } finally {
    els.configSaveButton.disabled = false;
    els.configCancelButton.disabled = false;
  }
}

async function deleteImage(image, button, source = MANUAL_LIBRARY_SOURCE) {
  if (!image?.id) {
    return;
  }
  setDeleteButtonBusyState(button, true);
  try {
    const deletedImageId = String(image.id || "").trim();
    const result = await pluginApiPost("caption_delete_image", {
      image_id: image.id,
      library_source: source,
    });
    if (String(selectedGalleryImageId || "").trim() === deletedImageId) {
      selectedGalleryImageId = "";
    }
    if (String(selectedSolidifiedGalleryImageId || "").trim() === deletedImageId) {
      selectedSolidifiedGalleryImageId = "";
    }
    if (result?.library) {
      applyLibraryState(result.library, { force: true });
    } else {
      await refreshLibrary();
    }
    if (editingImage?.id === image.id) {
      closeEditor();
    }
    await refreshAll();
  } catch (error) {
    setDeleteButtonBusyState(button, false);
    setMessage(`删除失败：${error.message || error}`);
  }
}

async function exportConfig() {
  await openExportDialog();
}

async function downloadScheduledBackup(item) {
  const backupId = item?.id || item?.filename || "";
  if (!backupId) {
    return;
  }
  setExportBusy(true);
  els.exportDialogMessage.textContent = "正在下载备份...";
  try {
    await pluginApiDownload(
      `scheduled_backup_download/${encodeURIComponent(backupId)}`,
      item.filename || "",
    );
    els.exportDialogMessage.textContent = "备份下载已开始，请查看浏览器下载列表。";
  } catch (error) {
    els.exportDialogMessage.textContent = `下载失败：${error.message || error}`;
  } finally {
    setExportBusy(false);
  }
}

async function manualExportConfig() {
  setExportBusy(true);
  els.exportDialogMessage.textContent = "正在创建备份...";
  try {
    const result = await pluginApiPost("scheduled_backup_create", {});
    applyScheduledBackupState({
      ...(result?.config || scheduledBackupState),
      backup_files: result?.backups || [],
      storage_dir: result?.storage_dir || scheduledBackupState.storage_dir,
    });
    const backup = result?.backup;
    if (backup) {
      await pluginApiDownload(
        `scheduled_backup_download/${encodeURIComponent(backup.id || backup.filename)}`,
        backup.filename || "",
      );
    }
    els.exportDialogMessage.textContent = "图库与配置已导出到默认下载目录。";
  } catch (error) {
    els.exportDialogMessage.textContent = `导出配置失败：${error.message || error}`;
  } finally {
    setExportBusy(false);
  }
}

async function deleteScheduledBackup(item) {
  const backupId = item?.id || item?.filename || "";
  if (!backupId) {
    return;
  }
  setExportBusy(true);
  els.exportDialogMessage.textContent = "正在删除备份...";
  try {
    const result = await pluginApiPost("scheduled_backup_delete", {
      backup_id: backupId,
    });
    applyScheduledBackupState({
      ...scheduledBackupState,
      backup_files: result?.backups || [],
    });
    els.exportDialogMessage.textContent = "备份已删除。";
  } catch (error) {
    els.exportDialogMessage.textContent = `删除失败：${error.message || error}`;
  } finally {
    setExportBusy(false);
  }
}

async function importConfig() {
  const file = els.importFileInput.files?.[0];
  if (!file) {
    els.importMessage.textContent = "请先选择通过导出配置获得的 ZIP 文件。";
    return;
  }
  if (!String(file.name || "").toLowerCase().endsWith(".zip")) {
    els.importMessage.textContent = "请选择 ZIP 备份文件。";
    return;
  }

  els.importConfirmButton.disabled = true;
  els.importCancelButton.disabled = true;
  els.importCloseButton.disabled = true;
  els.importMessage.textContent = "正在上传并导入备份...";

  try {
    const result = await uploadBackupConfig(
      file,
      els.importModeOverwrite.checked ? "overwrite" : "merge",
      els.importOverwriteConfig.checked,
    );

    if (result?.progress) {
      renderProgress(result.progress);
    }
    if (result?.library) {
      globalTagsDirty = false;
      imageUrlCache.clear();
      applyLibraryState(result.library, { force: true });
    }

    const stats = result?.result || {};
    els.importMessage.textContent = `导入完成：新增 ${asInt(stats.imported_images)} 张，跳过 ${asInt(stats.skipped_images)} 张。`;
    await refreshAll();
    window.setTimeout(closeImportDialog, 800);
  } catch (error) {
    els.importMessage.textContent = `导入配置失败：${error.message || error}`;
  } finally {
    els.importConfirmButton.disabled = false;
    els.importCancelButton.disabled = false;
    els.importCloseButton.disabled = false;
  }
}

function selectedPendingIds() {
  return Array.from(selectedPendingImageIds).filter(Boolean);
}

async function acceptSelectedPendingImages() {
  const imageIds = selectedPendingIds();
  if (!imageIds.length) {
    return;
  }
  await acceptPendingImagesWithCapacityAction(imageIds, "");
}

async function acceptPendingImagesWithCapacityAction(imageIds, capacityAction) {
  if (!imageIds.length) {
    return;
  }
  els.pendingAcceptButton.disabled = true;
  els.pendingDiscardButton.disabled = true;
  els.pendingPoolMessage.textContent = "正在入库选中的图片...";
  try {
    const payload = { image_ids: imageIds };
    if (capacityAction) {
      payload.capacity_action = capacityAction;
    }
    const result = await pluginApiPost("auto_collection_accept", payload);
    if (result?.result?.capacity_error) {
      openCapacityWarningDialog(result.result.capacity || {}, imageIds);
      els.pendingPoolMessage.textContent = "固化图像库容量不足，请选择处理方式。";
      return;
    }
    closeCapacityWarningDialog(false);
    selectedPendingImageIds.clear();
    if (result?.pool) {
      applyPendingPoolState(result.pool, { force: true });
    } else {
      await refreshPendingPool();
    }
    if (result?.library) {
      applyLibraryState(result.library, { force: true });
    } else {
      await refreshLibrary();
    }
    if (result?.progress) {
      renderProgress(result.progress);
    }
    const accepted = asInt(result?.result?.accepted?.length);
    const skipped = asInt(result?.result?.skipped?.length);
    els.pendingPoolMessage.textContent = `已入库 ${accepted} 张，跳过 ${skipped} 张。`;
    await refreshAll();
  } catch (error) {
    els.pendingPoolMessage.textContent = `入库失败：${error.message || error}`;
  } finally {
    syncPendingSelectionView();
  }
}

async function resolveCapacityWarning(action) {
  const imageIds = pendingCapacityActionImageIds.slice();
  if (!imageIds.length) {
    closeCapacityWarningDialog(true);
    return;
  }
  els.capacityDeleteOldestButton.disabled = true;
  els.capacityExpandButton.disabled = true;
  els.capacityCancelButton.disabled = true;
  els.capacityCancelTopButton.disabled = true;
  try {
    await acceptPendingImagesWithCapacityAction(imageIds, action);
  } finally {
    els.capacityDeleteOldestButton.disabled = false;
    els.capacityExpandButton.disabled = false;
    els.capacityCancelButton.disabled = false;
    els.capacityCancelTopButton.disabled = false;
  }
}

async function discardSelectedPendingImages() {
  const imageIds = selectedPendingIds();
  if (!imageIds.length) {
    return;
  }
  els.pendingAcceptButton.disabled = true;
  els.pendingDiscardButton.disabled = true;
  els.pendingPoolMessage.textContent = "正在丢弃选中的图片...";
  try {
    const result = await pluginApiPost("auto_collection_discard", {
      image_ids: imageIds,
    });
    selectedPendingImageIds.clear();
    if (result?.pool) {
      applyPendingPoolState(result.pool, { force: true });
    } else {
      await refreshPendingPool();
    }
    const discarded = asInt(result?.result?.discarded?.length);
    const skipped = asInt(result?.result?.skipped?.length);
    els.pendingPoolMessage.textContent = `已丢弃 ${discarded} 张，跳过 ${skipped} 张。`;
  } catch (error) {
    els.pendingPoolMessage.textContent = `丢弃失败：${error.message || error}`;
  } finally {
    syncPendingSelectionView();
  }
}

function toggleAllPendingSelection() {
  if (!pendingPoolImages.length) {
    return;
  }
  if (selectedPendingImageIds.size === pendingPoolImages.length) {
    selectedPendingImageIds.clear();
  } else {
    selectedPendingImageIds = new Set(
      pendingPoolImages.map((image) => String(image?.id || "")).filter(Boolean),
    );
  }
  syncPendingSelectionView();
}

async function uploadImages() {
  const files = Array.from(els.uploadInput.files || []);
  if (!files.length) {
    els.uploadMessage.textContent = "请先选择一张或多张图片。";
    return;
  }

  uploadedInThisPageSession = true;
  els.uploadButton.disabled = true;
  els.uploadInput.disabled = true;
  const uploaded = [];
  const errors = [];
  try {
    for (const [index, file] of files.entries()) {
      els.uploadMessage.textContent = `正在上传 ${index + 1}/${files.length}：${file.name}`;
      try {
        const result = await uploadImageFile(file);
        if (Array.isArray(result?.uploaded)) {
          uploaded.push(...result.uploaded);
        }
        if (Array.isArray(result?.errors)) {
          errors.push(...result.errors);
        }
        if (result?.progress) {
          renderProgress(result.progress);
        }
        if (result?.library) {
          applyLibraryState(result.library, { force: true });
        }
      } catch (error) {
        errors.push(`${file.name}: ${error.message || error}`);
      }
    }

    els.uploadInput.value = "";
    els.uploadMessage.textContent = errors.length
      ? `已上传 ${uploaded.length} 张，失败 ${errors.length} 个：${errors.join("；")}`
      : `已上传 ${uploaded.length} 张，正在后台生成特征标签。`;
    await refreshAll();
    if (uploaded.length) {
      closeUploadDialog();
    }
  } finally {
    els.uploadButton.disabled = false;
    els.uploadInput.disabled = false;
  }
}

els.refreshButton.addEventListener("click", refreshAll);
els.openUploadButton.addEventListener("click", openUploadDialogWithProviderCheck);
els.manualLibraryScopeButton.addEventListener("click", () =>
  setLibraryScopeMode("manual"),
);
els.autoCollectionScopeButton.addEventListener("click", () =>
  setLibraryScopeMode("auto"),
);
els.libraryListModeButton.addEventListener("click", () =>
  setLibraryViewMode("list", MANUAL_LIBRARY_SOURCE),
);
els.libraryGalleryModeButton.addEventListener("click", () =>
  setLibraryViewMode("gallery", MANUAL_LIBRARY_SOURCE),
);
els.solidifiedListModeButton.addEventListener("click", () =>
  setLibraryViewMode("list", SOLIDIFIED_LIBRARY_SOURCE),
);
els.solidifiedGalleryModeButton.addEventListener("click", () =>
  setLibraryViewMode("gallery", SOLIDIFIED_LIBRARY_SOURCE),
);
els.solidifiedBackToScopeButton.addEventListener(
  "click",
  scrollToLibraryScopeSwitch,
);
els.libraryUploadButton.addEventListener(
  "click",
  openUploadDialogWithProviderCheck,
);
els.tagCategoryButton.addEventListener("click", openTagCategoryDialog);
els.moreConfigButton.addEventListener("click", openConfigDialog);
els.userSearchButton.addEventListener("click", openUserSearchDialog);
els.proactiveEmojiButton.addEventListener("click", openProactiveEmojiDialog);
els.autoCollectionButton.addEventListener("click", openAutoCollectionDialog);
els.pendingSkipButton.addEventListener("click", scrollToSolidifiedLibrary);
els.pendingSelectAllButton.addEventListener("click", toggleAllPendingSelection);
els.pendingAcceptButton.addEventListener("click", acceptSelectedPendingImages);
els.pendingDiscardButton.addEventListener("click", discardSelectedPendingImages);
els.capacityDeleteOldestButton.addEventListener("click", () =>
  resolveCapacityWarning("delete_oldest"),
);
els.capacityExpandButton.addEventListener("click", () =>
  resolveCapacityWarning("expand"),
);
els.capacityCancelButton.addEventListener("click", () =>
  closeCapacityWarningDialog(true),
);
els.capacityCancelTopButton.addEventListener("click", () =>
  closeCapacityWarningDialog(true),
);
els.importButton.addEventListener("click", openImportDialog);
els.exportButton.addEventListener("click", exportConfig);
els.exportManualButton.addEventListener("click", manualExportConfig);
els.exportCancelButton.addEventListener("click", closeExportDialog);
els.exportCloseButton.addEventListener("click", closeExportDialog);
els.exportOverlay.addEventListener("click", (event) => {
  if (event.target === els.exportOverlay) {
    closeExportDialog();
  }
});
els.uploadButton.addEventListener("click", uploadImages);
els.uploadCloseButton.addEventListener("click", closeUploadDialog);
els.captionProviderInput.addEventListener("change", () => {
  renderCaptionProviderWarning(els.captionProviderInput.value);
});
els.warningCaptionProviderInput.addEventListener(
  "change",
  saveProviderWarningSelection,
);
els.providerWarningContinueButton.addEventListener(
  "click",
  continueFromProviderWarning,
);
els.providerWarningCancelButton.addEventListener(
  "click",
  closeProviderWarningDialog,
);
els.providerWarningCloseButton.addEventListener(
  "click",
  closeProviderWarningDialog,
);
els.providerWarningOverlay.addEventListener("click", (event) => {
  if (event.target === els.providerWarningOverlay) {
    closeProviderWarningDialog();
  }
});
els.uploadOverlay.addEventListener("click", (event) => {
  if (event.target === els.uploadOverlay) {
    closeUploadDialog();
  }
});
els.globalTagsInput.addEventListener("input", () => {
  globalTagsDirty = true;
  renderGlobalTagsPreview();
});
els.globalTagsSaveButton.addEventListener("click", saveGlobalTags);
els.editorSaveButton.addEventListener("click", saveEditor);
els.editorCancelButton.addEventListener("click", closeEditor);
els.editorCloseButton.addEventListener("click", closeEditor);
els.editorOverlay.addEventListener("click", (event) => {
  if (event.target === els.editorOverlay) {
    closeEditor();
  }
});
els.tagCategorySaveButton.addEventListener("click", saveTagCategoryDialog);
els.tagCategoryCancelButton.addEventListener("click", closeTagCategoryDialog);
els.tagCategoryOverlay.addEventListener("click", (event) => {
  if (event.target === els.tagCategoryOverlay) {
    closeTagCategoryDialog();
  }
});
els.proactiveEmojiSaveButton.addEventListener("click", saveProactiveEmojiDialog);
els.proactiveEmojiCancelButton.addEventListener("click", closeProactiveEmojiDialog);
els.proactiveEmojiOverlay.addEventListener("click", (event) => {
  if (event.target === els.proactiveEmojiOverlay) {
    closeProactiveEmojiDialog();
  }
});
els.autoCollectionSaveButton.addEventListener("click", saveAutoCollectionDialog);
els.autoCollectionCancelButton.addEventListener(
  "click",
  closeAutoCollectionDialog,
);
els.autoCollectionOverlay.addEventListener("click", (event) => {
  if (event.target === els.autoCollectionOverlay) {
    closeAutoCollectionDialog();
  }
});
els.userSearchSaveButton.addEventListener("click", saveUserSearchDialog);
els.userSearchCancelButton.addEventListener("click", closeUserSearchDialog);
els.userSearchOverlay.addEventListener("click", (event) => {
  if (event.target === els.userSearchOverlay) {
    closeUserSearchDialog();
  }
});
els.configSaveButton.addEventListener("click", saveConfigDialog);
els.configCancelButton.addEventListener("click", closeConfigDialog);
els.configOverlay.addEventListener("click", (event) => {
  if (event.target === els.configOverlay) {
    closeConfigDialog();
  }
});
els.importConfirmButton.addEventListener("click", importConfig);
els.importCancelButton.addEventListener("click", closeImportDialog);
els.importCloseButton.addEventListener("click", closeImportDialog);
els.importOverlay.addEventListener("click", (event) => {
  if (event.target === els.importOverlay) {
    closeImportDialog();
  }
});
els.solidifiedCapacityOverlay.addEventListener("click", (event) => {
  if (event.target === els.solidifiedCapacityOverlay) {
    closeCapacityWarningDialog(true);
  }
});
if (typeof ResizeObserver === "function") {
  const libraryResizeObserver = new ResizeObserver(scheduleLibraryRender);
  libraryResizeObserver.observe(els.libraryList);
  const solidifiedLibraryResizeObserver = new ResizeObserver(() =>
    scheduleLibraryRender(SOLIDIFIED_LIBRARY_SOURCE),
  );
  solidifiedLibraryResizeObserver.observe(els.solidifiedLibraryList);
} else {
  window.addEventListener("resize", () =>
    scheduleLibraryRender(MANUAL_LIBRARY_SOURCE),
  );
window.addEventListener("resize", () =>
    scheduleLibraryRender(SOLIDIFIED_LIBRARY_SOURCE),
  );
}

window.addEventListener(
  "scroll",
  () => {
    isPageScrolling = true;
    if (pageScrollIdleTimer) {
      window.clearTimeout(pageScrollIdleTimer);
    }
    pageScrollIdleTimer = window.setTimeout(() => {
      isPageScrolling = false;
      pageScrollIdleTimer = 0;
      flushPendingLibraryRenders();
    }, 220);
  },
  { passive: true },
);

try {
  const api = await ensureBridgeReady();
  document.title = api.t(
    "pages.image-center-page.title",
    "智能图片对话插件 | 图像库处理中心",
  );
} catch (error) {
  setStatus("failed");
  setMessage(`页面初始化失败：${error.message || error}`);
}

updateLibraryScopeVisibility();
await refreshAll();
window.setInterval(refreshAll, 1500);
