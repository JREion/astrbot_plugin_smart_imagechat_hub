# STRUCTURE

This document is the live development map for `astrbot_plugin_smart_imagechat_hub`.
Update it whenever plugin structure, runtime flow, Web APIs, Page elements, or
configuration semantics change.

## Version

- Current plugin version: `v2.4.2`
- AstrBot requirement: `>=4.24.2`
- Main entry: `main.py`
- Backend package: `backend/`
- Page entry: `pages/image-center-page/index.html`

## File Tree

```text
astrbot_plugin_smart_imagechat_hub/
|-- main.py
|-- metadata.yaml
|-- _conf_schema.json
|-- README.md
|-- DEVELOP.md
|-- STRUCTURE.md
|-- logo.png
|-- backend/
|   |-- __init__.py
|   |-- common.py
|   |-- web_api.py
|   |-- llm_context.py
|   |-- config_schema.py
|   |-- caption_library.py
|   |-- backup_restore.py
|   |-- auto_collection.py
|   |-- image_management.py
|   |-- retrieval.py
|   |-- tagging.py
|   `-- utils.py
|-- imgs/
|   |-- how_to_enter_page_ui.png
|   |-- upload_imgs_and_global_tags_in_page_ui.png
|   |-- import_imgs_then_check_tag_generation_step.png
|   |-- config_and_edit_tags_in_page_ui.png
|   `-- import_backup_data_in_page_ui.png
`-- pages/
    `-- image-center-page/
        |-- index.html
        |-- app.js
        `-- style.css
```

## Runtime Data

- Plugin data root: `data/plugin_data/astrbot_plugin_smart_imagechat_hub/`
- Image index cache: `image_index.json`
- Uploaded image files: `files/library_builder/image_files/`
- Auto-collection pending pool: `files/auto_collection/pending_pool/`
- Auto-collection solidified library: `files/auto_collection/solidified_library/`
- Auto-collection pool metadata: `auto_collection_pool.json`
- Auto-collection discarded-image digest history:
  `auto_collection_discarded.json`
- Scheduled backup storage: `scheduled_backups/`
- Plugin config image list: `library_builder.image_files`
- Global tags: `library_builder.global_tags`
- Per-image tags: `image_tags`
- Hidden images excluded from retrieval: `hidden_images`

## Configuration Groups

- `default_image_caption_provider_id`: Mirrors AstrBot system default image
  caption provider setting.
- `library_builder`: Upload source list, global tags, and Page progress link.
- `caption_tag_category_settings`: Controls categories used when generating
  automatic image tags.
- `user_search_flow`: Enables user-requested image search and stores request
  keywords.
- `reply_after_search`: Custom/fallback replies for user image search.
- `proactive_emoji_reply`: Controls probabilistic proactive emoji/image replies
  after normal LLM responses.
- `auto_image_collection`: Controls the Page and runtime auto-collection flow.
  Images are first stored in the pending pool, then moved into the solidified
  library for captioning and retrieval. `auto_reject_discarded` optionally
  records only pending-pool manual discards as SHA-256 digests and skips those
  images during future collection. Runtime collection uses a bounded background
  queue (`AUTO_COLLECTION_QUEUE_MAXSIZE`) so image bursts are skipped instead of
  accumulating work on AstrBot's message-processing path.
- `scheduled_backup`: Controls daily automatic ZIP export, retention count, and
  the read-only list of stored backups.
- `match_confidence_threshold`: Minimum LLM confidence accepted by retrieval.

## Backend Modules

`main.py` intentionally remains the only AstrBot plugin entry module. AstrBot
binds decorated handlers by the handler function `__module__`, so the decorated
message hooks stay in `main.py` and call methods supplied by backend mixins.

- `backend/common.py`: shared imports, constants, wake/collection filters, and
  the weak plugin reference used by the auto-collection filter.
- `backend/web_api.py`: Page and Web API route registration plus route handlers.
- `backend/llm_context.py`: LLM persona request and conversation lookup helpers.
- `backend/config_schema.py`: JSON state load/save, config migration, and dynamic
  WebUI schema refresh.
- `backend/caption_library.py`: library sync, caption background jobs, progress
  snapshots, plugin config snapshots, and category/provider normalization.
- `backend/backup_restore.py`: ZIP backup creation, scheduled-backup retention,
  import validation, restore logic, and backup serialization helpers.
- `backend/auto_collection.py`: group-image collection queue, URL/local image
  resolution, pending pool, solidified library lifecycle, and collection limits.
- `backend/image_management.py`: per-image tag updates, global tags, deletion,
  and Page image item formatting.
- `backend/retrieval.py`: local candidate ranking, LLM match/proactive emoji
  prompts, result parsing, and reply rendering.
- `backend/tagging.py`: tag extraction, merge/normalization, image type handling,
  and filename-derived fallback tags.
- `backend/utils.py`: JSON extraction, path safety, upload filename creation,
  stable image IDs/digests, config primitive readers, and scalar conversions.

## Web APIs

All routes are registered below `/api/plug/astrbot_plugin_smart_imagechat_hub/`.

- `GET caption_progress`: Current background tag-generation progress.
- `POST caption_start`: Sync library and start/continue background captioning.
- `GET caption_library`: Image library snapshot, global tags, and per-image tags.
- `GET/POST caption_plugin_config`: Read/write main plugin settings.
- `GET/POST caption_tag_category_settings`: Read/write caption provider and
  tag-category settings. Optional `recaption_all` queues full regeneration.
- `GET/POST proactive_emoji_config`: Read/write proactive reply settings.
- `GET/POST auto_collection_config`: Read/write auto-collection settings.
- `GET auto_collection_pool`: Inspect pending auto-collected images.
- `POST auto_collection_accept`: Batch accept pending images into the
  solidified library.
- `POST auto_collection_discard`: Batch discard pending images.
- `GET/POST scheduled_backup_config`: Read/write scheduled-backup settings and
  refresh the visible backup list schema.
- `GET scheduled_backup_list`: Return the current stored scheduled backups,
  including filename, creation time, size, and filename-derived plugin version.
- `POST scheduled_backup_create`: Create and store one ZIP backup, pruning old
  files to the configured limit.
- `POST scheduled_backup_delete`: Delete one stored scheduled backup.
- `GET scheduled_backup_download/<backup_id>`: Stream one stored scheduled
  backup without deleting it.
- `POST caption_update_tags`: Save one image's manual tags and selected global tags.
- `POST caption_update_global_tags`: Save global reusable tags.
- `POST caption_upload_image`: Upload one image through Page JSON payload.
- `GET/POST caption_provider_config`: Read/write default image caption provider.
- `POST caption_delete_image`: Delete one indexed image and its file.
- `GET caption_export_config`: Download ZIP backup. The response streams a
  temporary ZIP file and deletes that temporary file after the response ends.
  The ZIP contains `manifest.json`, `config.json`, `image_index.json`,
  `library.json`, indexed image files, `auto_collection_pool.json`,
  `auto_collection_discarded.json`, and pending-pool image files.
- `POST caption_import_config`: Import ZIP backup from multipart uploads or
  legacy JSON/base64 payloads. Multipart fields are `file`, `library_mode`, and
  `overwrite_plugin_config`.
- `POST caption_import_config_file`: Import ZIP backup from a Page file-upload
  bridge route. The upload filename encodes the import mode and overwrite flag,
  and the handler restores them before loading the temporary ZIP file. This is
  retained as a compatibility path; the Page now uses multipart
  `caption_import_config`.
- `GET caption_image/<image_id>`: Serve image file.
- `GET caption_image_data/<image_id>`: Serve image as JSON data URL.

## Page Element Map

Main sections in `pages/image-center-page/index.html`:

- Progress panel: `statusBadge`, `progressBar`, `percentText`, count fields,
  `refreshButton`, `openUploadButton`, `tagCategoryButton`, `importButton`,
  `exportButton`.
- Capabilities panel: `userSearchButton`, `proactiveEmojiButton`,
  `moreConfigButton`.
- Global tags panel: `globalTagsInput`, `globalTagsPreview`,
  `globalTagsSaveButton`.
- Library panel: `libraryList`, `libraryListModeButton`, `libraryGalleryModeButton`,
  `libraryUploadButton`, `emptyLibraryText`.
- Library scope switch: `manualLibraryScopeButton` and
  `autoCollectionScopeButton` choose whether the Page shows only the manual
  upload library or only the auto-collection pending/solidified sections.
- Pending collection panel: `pendingPoolList`, `pendingPoolMeta`,
  `pendingSkipButton`, `pendingSelectAllButton`, `pendingAcceptButton`,
  `pendingDiscardButton`,
  `emptyPendingPoolText`, `pendingPoolMessage`. Pending cards show only
  month/day hour:minute collection time and use a full-card selected check
  overlay. The section header is sticky while the pending pool is being scrolled,
  and the skip button jumps directly to the solidified library section. When a
  batch accept would exceed the solidified library limit, the Page opens
  `solidifiedCapacityOverlay`; its actions are `capacityDeleteOldestButton`,
  `capacityExpandButton`, and `capacityCancelButton`. `pendingPoolMeta` displays
  `current/limit 张` from `pending_pool_limit` and colors only the current count
  yellow at 80% capacity and red at or above the limit.
- Solidified library panel: `solidifiedLibraryList`,
  `solidifiedListModeButton`, `solidifiedGalleryModeButton`,
  `solidifiedBackToScopeButton`, `solidifiedLibraryMeta`,
  `emptySolidifiedLibraryText`. `solidifiedLibraryMeta` displays `current/limit 张`
  from `solidified_library_limit`, uses the same yellow/red capacity colors, and
  `solidifiedBackToScopeButton` scrolls back to the manual/auto library scope
  switch.
- Auto-collection dialog: `autoCollectionButton`, `autoCollectionOverlay`,
  save/cancel buttons, and the auto-collection config inputs, including
  `autoCollectionRejectDiscardedInput`.
- Image editor overlay: `editorOverlay`, `editorImage`, `tagInput`,
  `globalTagChoices`, save/cancel/close buttons.
- Caption settings overlay: `tagCategoryOverlay`, `captionProviderInput`,
  preset/custom category inputs, `tagCategoryRecaptionInput`.
- Proactive emoji overlay: enable/provider/meme-only/embed/probability inputs.
- User search overlay: enable switch and request keyword textarea.
- More config overlay: hidden image paths, startup sync, confidence threshold.
- More config overlay: also includes the scheduled-backup section with enable,
  time, retention, and visible backup list fields. Backup rows show download and
  delete actions plus the package version, highlighting non-current versions.
- Upload/provider warning/import overlays: handle upload, missing provider, and
  backup import workflows. Page backup import uses the AstrBot bridge upload
  path `caption_import_config_file` so it works inside the protected Page iframe.
  Because the bridge upload API only carries a single `file` field, import mode
  and the "overwrite plugin config" checkbox are encoded into the temporary
  uploaded filename and decoded by the backend. The checkbox remains unchecked
  by default.
- Export overlay: `exportOverlay`, `exportCloseButton`, `exportProgressBar`,
  `exportBackupList`, `emptyExportBackupText`, `exportDialogMessage`,
  `exportManualButton`, and `exportCancelButton`. It shows the newest three
  stored backups, supports delete/download actions, shows each package version,
  and shows an indeterminate progress bar during backup creation or download.

`pages/image-center-page/app.js` owns all Page behavior and keeps the local
backup package version constant in sync with `PLUGIN_VERSION`:

- Bridge/API helpers: `ensureBridgeReady`, `pluginApiGet`, `pluginApiPost`,
  `pluginApiDownload`, `uploadBackupConfig`.
- Rendering: `renderProgress`, `renderLibrary`, `renderGlobalTagsEditor`,
  `renderGlobalTagChoices`. `renderLibrary` branches on the local
  `libraryViewMode`: list mode keeps the original row layout, while gallery mode
  renders a responsive grid, top-right trash buttons, and a second-line detail
  row for the selected image. Gallery layout now clamps its per-row card count
  between 3 and 6 columns using `getGalleryColumns()`, which is width-driven
  rather than CSS auto-flow based.
- The manual library and the solidified library now have separate local view
  modes and separate selection state. The Page also keeps a pending-pool
  selection model for batch accept/discard actions.
- Library state and gallery stability: `applyLibraryState` fingerprints the
  library snapshot and skips DOM rebuilds when polling returns unchanged image
  data. `ResizeObserver` is used for gallery layout changes, and
  `scheduleLibraryRender` only rebuilds when the library width changes enough to
  alter the gallery column count. This avoids mobile browser sticky-header
  scroll jumps caused by address-bar resize events or unchanged polling refreshes.
- The Page now preserves the current scroll position around library re-renders
  and defers gallery refreshes while the page is actively scrolling, which
  prevents the sticky header from snapping back on iOS browsers.
- Dialogs: open/fill/read/save functions for upload, provider warning, tag
  categories, proactive reply, auto collection, user search, more config,
  import, and editor.
- Data actions: `refreshAll`, `refreshLibrary`, `saveEditor`,
  `saveGlobalTags`, `deleteImage`, `acceptSelectedPendingImages`,
  `discardSelectedPendingImages`, `exportConfig`, `manualExportConfig`,
  `downloadScheduledBackup`, `deleteScheduledBackup`, `importConfig`,
  `uploadImages`.
  `setLibraryViewMode`, `toggleGallerySelection`, `togglePendingSelection`, and
  `scheduleLibraryRender` keep the gallery/list switch local to the Page
  session.

## main.py Flow Map

`SmartImageSenderPlugin` now composes the focused backend mixins and keeps only
core plugin responsibilities in the entry module: constructor state setup,
`initialize`, `terminate`, AstrBot-decorated message hooks, and the admin sync
command. All route handlers and domain logic keep their original method names but
live in `backend/` mixin modules.

### Entry And Hooks

- `SmartImageSenderPlugin.__init__`: Initializes shared runtime state, loads
  index/pool/discarded-history JSON, registers Web APIs via `WebApiMixin`, and
  publishes the weak plugin reference used by `AutoImageCollectionMessageFilter`.
- `initialize`: Runs config migrations, refreshes schemas, syncs the library,
  starts the upload watcher, scheduled-backup loop, and auto-collection worker.
- `terminate`: Cancels background tasks, waits for caption cleanup, persists
  index/pool/discarded-history data, and clears the auto-collection plugin
  reference.
- `WakeImageRequestFilter.filter`: Allows the user-search handler only for
  explicit wake contexts: private chat, `event.is_at_or_wake_command`, or an
  explicit configured AstrBot `wake_prefix` appearing in the current message.
  It intentionally does not trust `event.is_wake_up()` because other handlers
  can mark an event as awake.
- `_message_has_config_wake_prefix`: Reads AstrBot `wake_prefix` from the active
  config. It allows sentence-internal matching for text-like wake words such as
  names, but avoids treating one-character symbol prefixes such as `/` as
  anywhere-in-message matches.
- `_message_has_image_request_hint`: Keeps the wake filter from activating this
  plugin on non-image wake-prefix messages such as "XXX 晚上好". Sentence-internal
  wake-prefix matching is only used when the same message also looks like an
  image request.
- `on_wake_message`: User-requested image search. Checks message text, feature
  switch, explicit wake state, and request keyword before syncing the library,
  reranking candidates, asking the LLM for a shortlist, and sending one image.
- `on_decorating_result`: Proactive emoji/image append hook for LLM replies.
- `after_message_sent`: Sends queued independent proactive image replies.
- `sync_images_command`: Admin command to resync the library.

### User Image Search Flow

The user search flow is deliberately lightweight:

1. `_library_candidates` builds candidates from existing index/config data.
   Each candidate carries `tags`, `auto_tags`, `manual_tags`, and
   `selected_global_tags`.
2. `_search_query_profile` extracts query terms, name-like terms, and image type
   terms from the message.
3. `_search_candidate_score` scores candidates locally using filename, merged
   tags, name-like query terms, and type hints.
4. `_rank_search_candidates` keeps only `SEARCH_CANDIDATE_LIMIT` candidates for
   the LLM call.
5. `_match_prompt` asks the LLM to choose the top `1-SEARCH_SELECTION_POOL_SIZE`
   candidate IDs in a single call.
6. `_parse_decision` normalizes the LLM JSON output.
7. `_select_image` enforces `match_confidence_threshold` and randomly selects
   from the shortlisted IDs.
8. `_fallback_match` picks from the locally highest-scored pool if the LLM call
   fails.

### Captioning And Indexing

- `_sync_library`: Syncs configured/uploaded images into `image_index.json`,
  preserves manual/global tags, queues missing/stale captions, refreshes config
  schemas, and computes uncached image digests through `_cached_sha256_async` so
  large files do not monopolize the event loop.
- `_create_persistent_backup`: Builds the canonical ZIP backup snapshot, writes
  it to a temporary file, stores it in `scheduled_backups/`, and returns the
  stored backup metadata. `caption_export_config_api` uses the same code path so
  manual export and scheduled backups stay aligned in content and filename
  format.
- `_scheduled_backup_loop`: Sleeps until the configured daily backup time,
  creates one persistent backup, and enforces the retention limit.
- `_scheduled_backup_config_api`, `_scheduled_backup_list_api`,
  `_scheduled_backup_create_api`, `_scheduled_backup_delete_api`, and
  `_scheduled_backup_download_api` expose the scheduled-backup surface. Backup
  metadata includes a `version` field parsed from the ZIP filename.
- `_collect_images_from_event`: Enqueues image collection jobs for selected
  groups. The worker stores accepted images in the pending pool and leaves them
  outside retrieval until the user accepts them.
- `AutoImageCollectionMessageFilter`: Lives in `backend/common.py` and reads the
  plugin-owned `auto_image_collection` config through the weak plugin reference,
  so the enable switch and source groups work even when AstrBot global config
  changes elsewhere. The filter only performs lightweight capacity checks and
  queue insertion.
- `_auto_collection_worker_loop`, `_enqueue_auto_collection`, and
  `_resolve_collected_image_path`: Process auto-collected images off the event
  path. HTTP URLs are downloaded with short timeouts and size-bounded streaming;
  local files are used directly; other component forms fall back to
  `Image.convert_to_file_path()` behind a timeout.
- `_stored_image_digests(include_pending_pool=True)`: Builds the dedupe set for
  collection and, when needed, excludes the pending pool so batch accept does
  not self-conflict with the source pool.
- `_stored_image_digests_from_metadata(include_pending_pool=True)`: Fast
  metadata-only dedupe helper used by auto collection and batch accept to avoid
  full directory scans on hot paths.
- `_store_collected_image`, `_accept_pending_collection_images`,
  `_discard_pending_collection_images`, `_cleanup_collection_pool`: Manage the
  isolated pending pool and solidified library lifecycle. `_store_collected_image`
  checks pending-pool capacity before SHA-256 calculation and file copy, checks
  the discarded digest history when `auto_reject_discarded` is enabled, and
  reuses a caller-supplied digest set when available. `_accept_pending_collection_images`
  rejects manual batch accepts that would exceed `solidified_library_limit`
  unless the Page explicitly asks to delete the oldest solidified images or
  expand the limit. `_delete_oldest_solidified_images` sorts by preserved
  `solidified_at`/`collected_at`, then by legacy solidified filenames containing
  the original collection timestamp, so imported older images remain ordered
  correctly. `_discard_pending_collection_images` is the only path that records
  new discarded digests, and it saves discarded history once per batch.
- `_start_upload_watch_task` / `_watch_uploaded_images`: Background file sync.
- `_caption_pending_images`: Processes pending caption jobs. Its cancellation
  cleanup uses a tracked shielded task so images marked `running` are restored
  to `pending` even if the caption worker is cancelled while waiting on the
  plugin lock.
- `_caption_image`: Calls the configured image caption provider and normalizes
  tags through `_normalize_caption_tags`.
- `_reset_all_caption_tags_for_new_categories`: Clears auto/manual tags for full
  recaption after category changes.

### Config And Schema

- `_migrate_reply_config`: Migrates legacy reply fields into `reply_after_search`.
- `_migrate_progress_link_config`: Keeps Page link in config.
- `_refresh_image_tag_schema`: Builds WebUI templates for current images.
- `_refresh_caption_tag_category_schema`: Updates provider/category options.
- `_refresh_proactive_emoji_schema`: Updates proactive provider options.
- `_plugin_config_snapshot`, `_update_plugin_config_from_payload`: Page config IO.
- `_tag_category_settings_snapshot`, `_normalize_tag_category_settings`: Caption
  category config IO.
- `_proactive_emoji_snapshot`, `_normalize_proactive_emoji_config`: Proactive
  reply config IO.

### Backup And Restore

- `_backup_snapshot`, `_write_backup_zip_file`, `_stream_temp_file`: Export
  plugin config, index, global tags, image tags, and image files as a temporary
  ZIP file without keeping the full archive in memory. `_config_snapshot`
  injects normalized runtime config groups so Page/native WebUI settings are not
  missed by backup export.
- `_receive_backup_import_file`, `_write_legacy_backup_payload_to_temp_file`,
  `_read_backup_zip`: Accept multipart imports or legacy JSON/base64 imports,
  save them to a temporary ZIP path, and validate manifest/config/index data.
- `_restore_backup`, `_restore_backup_images`, `_copy_zip_image_entry_to_temp`,
  `_imported_index_item`: Merge or overwrite image library and index state while
  copying imported images one-by-one from the ZIP through temporary image files.
- `_apply_imported_config`: Restores compatible config fields.
- `_clear_image_library`: Removes current indexed image files for overwrite mode.

### Tag Helpers

- `_tags_from_item`: Runtime merged tag set used for retrieval.
- `_display_tags_from_item`: Page-visible manual-or-auto tags.
- `_normalize_tags`, `_merge_tags`, `_valid_global_tags`: Tag normalization.
- `_filename_tags`: Fallback tags derived from filename.
- `_is_image_type_tag`, `_choose_base_image_type`: Image type tag handling.

### Path And Serialization Helpers

- `_abs_plugin_data_path`: Resolves relative plugin-data paths safely.
- `_norm_rel_path`: Normalizes and validates relative paths.
- `_safe_upload_filename`, `_unique_upload_rel_path`: Upload path creation.
- `_image_id`, `_sha256`, `_cached_sha256_async`, `_cached_sha256`,
  `_sha256_bytes`: Stable IDs and digests.
- `_loads_json_object`: Lenient JSON extraction from LLM output.
- `_cfg_str`, `_cfg_bool`, `_cfg_float`: Runtime config readers.
- `_stored_image_digests`, `_cached_sha256`, `_all_known_image_digests`:
  lightweight cross-folder deduplication helpers for auto collection.

## AstrBot Behavior References Used

- `AstrMessageEvent.is_private_chat()` identifies private chats.
- `AstrMessageEvent.is_at_or_wake_command` is set by AstrBot waking checks for
  @bot, reply-to-bot, wake-prefix, and private chat when private wake prefix is
  not required.
- `AstrMessageEvent.is_wake_up()` may also be set by activated plugin handlers,
  so the user-search flow avoids using it as the user-search gate.
- AstrBot `WakingCheckStage` checks wake prefixes, @bot, @all, reply-to-bot, and
  private chat before normal plugin processing.

## Development Notes

- Do not add new config fields for retrieval tuning unless explicitly requested.
- Keep user-search retrieval to one LLM call.
- Keep candidate filtering cheap: simple string/token scoring over existing
  tags and filenames only.
- Preserve random selection from a relevant LLM shortlist to avoid repetitive
  replies.
- Update `DEVELOP.md`, `metadata.yaml`, `PLUGIN_VERSION`, and this file for each
  release-level change.
