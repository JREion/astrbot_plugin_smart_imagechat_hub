# DEVELOP

# v2.4.8

- Follow-up bugfix without a version bump: accepting images from the pending
  auto-collection pool no longer lets Page polling reset an active caption item
  from `running` back to `pending`. Library sync now preserves `running` while a
  caption task is alive, and recovers stale `running` items when no caption task
  exists.
- Follow-up change without a version bump: capability buttons in the Page now
  share the same column width. The layout keeps at most two buttons per row when
  labels can stay on one line, falls back to one column when needed, and keeps
  the "更多插件配置 ..." button on the final row.
- Added a Page "图库管理" primary action between upload and automatic tag-flow
  settings. It scrolls the Page to the manual/auto library scope switch so the
  library manager starts at the top of the viewport.
- Changed the Page capabilities and global-tags sections to share a responsive
  two-column layout on wide viewports while preserving the existing single-column
  layout on narrow screens. Capability buttons now keep text on one line, flow
  as one or two columns, and keep "更多插件配置 ..." on the final row.
- Updated the Edit Tags dialog title to show only the image filename with suffix
  instead of the full relative path.
- Bumped plugin metadata, runtime version, and Page backup-version constant to
  `v2.4.8`.

# v2.4.6

- Fixed group smart meme-combat join-pattern and battle observation paths.
  Incoming group image jobs now snapshot only the required event fields before
  entering the bounded queue, avoiding later pipeline state changes.
- Fixed repeated-image detection for OneBot/QQ-style image messages by using
  stable image file identifiers for fingerprints while keeping URL/base64 data
  available for sendback.
- Fixed image-only streak detection by checking actual `Plain` components first
  and treating common image placeholders in `message_str` as non-text.
- Fixed battle image selection so valid LLM-selected candidate IDs are accepted
  even when the model omits a confidence value; local fallback still applies.
- Added Page-only tag search bars above the manual-upload library and the
  solidified library image lists. Searches filter the currently loaded images
  locally by tag text and expose an inline clear button without touching backend
  configuration or storage.
- Bumped plugin metadata, runtime version, and Page backup-version constant to
  `v2.4.6`.

# v2.4.5

- Added group smart meme-combat (`meme_combat`) with three subfeatures:
  join-pattern replies for repeated identical group images, probability-based
  related image bursts after this plugin sends an image, and continuous-image
  battle participation using quick two-image semantic analysis plus local
  library retrieval.
- Implemented `backend/meme_combat.py` as a focused mixin with bounded
  per-group in-memory windows, lightweight image fingerprints, a lazily-created
  bounded background observer queue, cooldowns for burst/battle sends, and state
  resets after bot image sends to avoid feedback loops.
- Added native WebUI schema support and Page API support through
  `meme_combat_config`, including provider-option refresh for the battle
  quick-analysis model.
- Added a Page "群聊智能斗图" capability button and configuration overlay with
  total switch, "加入队形", "图片连发", and "参与团战" sections.
- Included `meme_combat` in config snapshots and backup import/export
  normalization.
- Bumped plugin metadata, runtime version, and Page backup-version constant to
  `v2.4.5`.

# v2.4.2

- Updated `main.py` to import AstrBot framework symbols directly from
  `astrbot.api`, `astrbot.api.event`, and `astrbot.api.star` for framework
  reflection checks.
- `SmartImageSenderPlugin` now inherits `Star` directly and uses `Context`,
  `StarTools`, and `register` from `astrbot.api.star` without routing those
  symbols through `backend.common`.
- Bumped plugin metadata, runtime version, and Page backup-version constant to
  `v2.4.2`.

# v2.4.1

- Replaced package-level wildcard imports from `common.py` with explicit imports
  in `main.py` and backend mixin modules to avoid namespace pollution.
- Replaced the `_sync_library` index-shape assertion with an explicit dict
  fallback so optimized Python runs keep the same defensive behavior.
- Bumped plugin metadata, runtime version, and Page backup-version constant to
  `v2.4.1`.

# v2.4.0

- Refactored the former monolithic `SmartImageSenderPlugin` God Object into a `backend/` package of focused mixins while keeping `main.py` as the AstrBot plugin entry point.
- `main.py` now keeps only plugin initialization/termination and AstrBot-decorated message hooks so handler discovery continues to bind against the plugin module.
- Moved Web APIs, LLM conversation helpers, config/schema migration, caption/index maintenance, ZIP backup/restore, auto-collection, image management, retrieval, tag helpers, and path/serialization utilities into separate backend modules without changing route names or runtime function names.
- Bumped plugin metadata, runtime version, and Page backup-version constant to `v2.4.0`.

# v2.3.3

- Updated local AstrBot source at `D:\Models\vibe_coding\astrbot_env\AstrBot`
  to official `origin/master` commit `0711172fa7fb1ceabcc0bc8034d4740c385a76de`.
- Optimized auto image collection so message filters only do lightweight checks
  and enqueue work into a bounded background queue. Queue overflow now skips new
  collection jobs instead of piling up tasks on the AstrBot event path.
- Added short timeout and size-bounded streaming for collected HTTP image URLs,
  avoiding repeated direct use of AstrBot `Image.convert_to_file_path()` when a
  URL can be handled safely by the plugin. Local files and base64 images remain
  supported through the existing fallback path.
- Bumped plugin metadata and runtime version to `v2.3.3`.

# v2.3.2

- Fixed scheduled-backup list action labels in the Page export dialog and the scheduled-backup config section so download/delete render as readable Chinese text.
- Backup list rows now show the backup package version parsed from the ZIP filename between creation time and file size; versions different from the current plugin version are highlighted in yellow.
- Scheduled-backup list APIs now include a `version` field while preserving filename-based fallback compatibility.
- Bumped plugin metadata and runtime version to `v2.3.2`.

# v2.3.1

- Page scheduled-backup list now uses the same download/delete row layout as the export dialog and no longer shows the storage path hint in the Page UI.
- Native WebUI scheduled-backup group hint now includes the concrete backup storage path under `scheduled_backups/`.
- Bumped plugin metadata and runtime version to `v2.3.1`.

# v2.3.0

- Added scheduled backups with a daily time switch, a backup time input, and a retention count.
- Manual export now creates the same ZIP archive as before, stores it in the plugin data directory, and also downloads it for the user.
- Page and native WebUI both expose scheduled-backup settings and the stored backup list.
- The Page export dialog now lists stored backups, supports direct download and deletion, and shows an indeterminate progress bar while a backup is being created or downloaded.
- Bumped plugin metadata and runtime version to `v2.3.0`.

# v2.2.8

- Page pending-pool and solidified-library header counts now display `current/limit 张` using the auto-collection limits from plugin config. Only the current count turns red when it exceeds the configured limit.
- Added a round up-arrow button on the solidified-library header. It uses the same visual style as the list/gallery toggle icons and scrolls back to the manual/auto library scope switch.
- Follow-up change without a version bump: the count turns yellow at 80% capacity and red at or above the limit, and the standalone up-arrow button now matches the full outer height of the list/gallery toggle.
- Follow-up fix without a version bump: deleting the oldest solidified images now preserves imported solidified timestamps and falls back to the original collection timestamp embedded in legacy solidified filenames, so imported/old-version images participate correctly in oldest-first deletion.
- Bumped plugin metadata and runtime version to `v2.2.8`.

# v2.2.7

- Fixed Page backup import so the "overwrite plugin config" checkbox is sent as a real multipart form field instead of being encoded into the uploaded filename. The checkbox remains unchecked by default.
- Updated the main `/caption_import_config` route to accept multipart ZIP uploads directly while keeping the legacy JSON/base64 payload path.
- Backup export now includes auto-collection pending-pool metadata, pending-pool image files, and discarded-image digest history, in addition to plugin config, image index, library metadata, and indexed image files.
- Backup import restores the auto-collection pending pool and discarded digest history using the existing plugin data directory structure.
- Follow-up fix without a version bump: Page backup import now uses AstrBot bridge upload again to avoid protected Page iframe `fetch` failures, and the backend filename decoder correctly strips the `__asmimgimport__::` separator so the overwrite-config checkbox is honored.
- Follow-up change without a version bump: auto collection now stops before image conversion/hash/copy when the pending pool is full, and auto-accept mode also stops when the solidified library has no remaining capacity.
- Follow-up change without a version bump: pending-pool batch accept now returns a capacity warning instead of silently deleting old solidified images. The Page warning lets the user delete the oldest solidified images, expand the solidified limit by the pending-pool limit, or cancel and clear the selection.
- Bumped plugin metadata and runtime version to `v2.2.7`.

# v2.2.6

- Fixed backup export config snapshots so normalized runtime settings are included, including the full `auto_image_collection` group (`enabled`, `include_in_features`, `source_groups`, and related fields).
- Added a sticky header to the Page pending-pool section so batch actions remain reachable while scrolling through long pending pools.
- Added a pending-pool skip action that scrolls directly to the solidified library section.
- Tightened pending-pool card density and changed its grid to clamp between 3 and 6 columns.
- Bumped plugin metadata and runtime version to `v2.2.6`.

# v2.2.5

- Optimized auto-collection hot paths for lightweight servers. New pending images now dedupe against index/pool metadata instead of rescanning and hashing the full data directory for every collected image.
- Batch pending-pool discard now records discarded SHA-256 digests in memory and saves the discarded-history file once per batch instead of once per image.
- Batch pending-pool accept now uses metadata-backed dedupe for manual/solidified libraries and defers solidified-limit cleanup saves/schema refreshes to the existing batch finalization step.
- Bumped plugin metadata and runtime version to `v2.2.5`.

# v2.2.4

- Hardened background caption cancellation cleanup. Running image states are now restored through a shielded cleanup task so cancellation cannot leave images stuck as `running`.
- Moved image SHA-256 calculation in `_sync_library` to a thread-backed async helper, reducing event-loop stalls during large library syncs.
- Reworked backup export/import to use temporary ZIP files and chunked file handling instead of keeping full backup archives and all restored images in memory.
- Page backup import now uses a dedicated file-upload route via AstrBot bridge upload; the legacy JSON/base64 import payload remains supported for compatibility.
- Bumped plugin metadata and runtime version to `v2.2.4`.

# v2.2.3

- Added `auto_reject_discarded` for auto collection. When enabled, manual pending-pool discards are recorded as lightweight SHA-256 digests in plugin data and future matching images are skipped before entering the pending pool.
- The discarded-image history only tracks images discarded from the pending pool; deleting manual uploads or solidified images does not add records.
- Page image management now has a prominent switch between the manual-upload library and the auto-collected library view.
- Pending-pool cards now hide filenames and source group IDs, show only minute-level 24-hour collection time, and use a large translucent selected check overlay.
- Bumped plugin metadata and runtime version to `v2.2.3`.

# v2.2.2

- Fixed pending-pool batch acceptance so accepted images are no longer treated as duplicates against the pending pool itself.
- Batch accept now uses a dedupe scope that covers the manual library and solidified library, then moves accepted images into the solidified library and starts captioning as intended.
- Bumped plugin metadata and runtime version to `v2.2.2`.

# v2.2.1

- Fixed auto-collection reading the wrong config source. The collector filter now reads the plugin's own `auto_image_collection` config instead of AstrBot's global config, so the enable switch and group list take effect.
- Bumped plugin metadata and runtime version to `v2.2.1`.

# v2.2.0

- Added automatic group-image collection for selected QQ groups, with a separate pending pool and solidified library stored in isolated data subfolders.
- Pending images are deduplicated against manual uploads, the pending pool, and the solidified library, and they can be batch accepted or discarded from the Page UI.
- Accepted collected images now enter the same captioning and retrieval flow as manual uploads, while the solidified library stays separate from the manual library in both storage and Page management.
- Added a Page dialog for configuring auto collection and a Page-only selection view for pending images.
- Hardened the Page gallery against sticky-header scroll jumps by preserving scroll position around library re-renders and deferring updates while the page is actively scrolling.
- Bumped plugin metadata and runtime version to `v2.2.0`.

## v2.1.1

- Added a gallery mode to the Page image library. The header now includes a minimal icon toggle for list/gallery views, while list mode keeps the original layout unchanged.
- Gallery mode shows medium-sized image cards in a grid, adds a top-right trash icon delete button on each card, and reveals the familiar file/tags/delete detail row under the selected row without showing the thumbnail again.
- Hardened gallery mode against mobile sticky-header scroll jumps by avoiding unchanged polling re-renders and by observing library width instead of relying on window resize events.
- Gallery cards now keep a square frame and use at least three columns on narrow screens.
- The gallery/list switch stays local to the Page session and does not add any new config options.
- Bumped plugin metadata and runtime version to `v2.1.1`.
- Synced `STRUCTURE.md` with the new Page library layout and control mapping.

## v2.1.0

- Tightened the user-triggered image search flow so it only runs when the current message explicitly wakes the bot: direct private chat, @bot/reply-to-bot, or AstrBot wake-prefix messages.
- Text-like AstrBot wake words are also recognized when they appear inside the current message, matching common phrases such as "来点 XXX 表情包" without enabling plain keyword-only group triggers.
- Non-image wake-prefix messages such as "XXX 晚上好" do not activate this plugin's handler.
- Plain group messages that only contain request keywords no longer trigger image retrieval.
- Added a lightweight local reranking step before LLM image matching. The reranker builds a short candidate list from merged image tags, filename, and name-like query terms, then lets the LLM choose only from that list.
- Updated the image-search prompt to ask the LLM for the top 1-3 matching image IDs in one call.
- The runtime randomly selects from that shortlisted set to preserve response variety.
- Bumped plugin metadata and runtime version to `v2.1.0`.
- Added `STRUCTURE.md` as the cross-device development map for file structure, runtime APIs, Page element mapping, and `main.py` function responsibilities.

## v2.0.5

- Page upload actions now check whether a default image caption provider is configured before opening the upload dialog.
- Added a Page warning dialog that lets admins configure the default image caption provider in place, saving changes immediately through the existing provider config API.

## v2.0.4

- Moved the Page "更多插件配置 ..." action into the capability configuration panel and aligned it to the right side of the capability action row.
- Updated the image library header upload action to use the same prominent primary style as the main upload action.
- Moved the WebUI default image caption provider field to the top of the plugin config while keeping Page and stored-config compatibility.

## v2.0.3

- Upload dialog now closes automatically after images are accepted and queued for background tag generation.
- Moved default image caption provider selection into the tag category settings dialog, with a warning state when no provider is configured.
- WebUI exposes the same default image caption provider setting inside `caption_tag_category_settings`, and the plugin syncs it with AstrBot's system `provider_settings.default_image_caption_provider_id`.
- Image library header is sticky while scrolling through long libraries.

## v2.0.2

- Page initial progress view now shows a standby state until the current page session uploads new files.
- Moved the refresh action into the progress message row and replaced the old lower-left refresh position with an "上传新图片" action.
- Moved image upload from an inline page panel into a shared upload dialog, also reachable from the image library header.
- Added `caption_provider_config` Page API to view and update AstrBot's `provider_settings.default_image_caption_provider_id` from the upload dialog.

## v2.0.1

- Added `user_search_flow` to let admins disable the user-triggered image search flow without affecting proactive emoji replies.
- Added `embed_in_conversation` to `proactive_emoji_reply`; when disabled, the selected emoji image is sent after the LLM reply through `after_message_sent`.
- Plugin Page now separates "为用户寻找表情包" from "更多插件配置"; the former owns request keywords and reply-after-search settings, while the latter keeps retrieval-process settings.
- Page proactive emoji dialog exposes the same embed/independent-send option as WebUI.

## v2.0.0

- Added `proactive_emoji_reply` configuration for probabilistic proactive meme/image replies after ordinary LLM responses.
- WebUI exposes the proactive reply group between the normal image-search reply settings and image tag list.
- Plugin Page adds a "插件能力配置" section with a "对话中主动发送表情包" dialog that reads and saves the same config through plugin Web APIs.
- Runtime hook uses `on_decorating_result`, only runs for LLM-generated results, skips plugin-owned image-search replies, and appends one locally matched image when the configured probability hits.
- The analysis provider can be selected from AstrBot chat providers; empty or unavailable choices fall back to AstrBot's current session provider strategy.

## v1.9.0

- Added `caption_tag_category_settings` to control which categories the image caption prompt should prioritize.
- WebUI exposes preset category selection and custom category input before the image library builder section.
- Plugin Page adds a separate "生成标签类别设定 ..." dialog.
- Page-only recaption option clears existing auto/manual image tags, preserves selected global tags, marks all images as pending, and reuses the existing background caption progress pipeline.
- README intentionally remains unchanged for this internal development change.
