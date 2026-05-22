from .common import AstrMessageEvent


class LLMContextMixin:
    async def _request_llm_with_persona(
        self,
        event: AstrMessageEvent,
        prompt: str,
    ):
        conversation = await self._current_conversation(event)
        return event.request_llm(prompt=prompt, conversation=conversation)

    async def _current_conversation(self, event: AstrMessageEvent):
        conv_mgr = getattr(self.context, "conversation_manager", None)
        if conv_mgr is None:
            return None

        umo = event.unified_msg_origin
        platform_id = event.get_platform_id()
        cid = await conv_mgr.get_curr_conversation_id(umo)
        if not cid:
            cid = await conv_mgr.new_conversation(umo, platform_id)

        conversation = await conv_mgr.get_conversation(umo, cid)
        if conversation:
            return conversation

        cid = await conv_mgr.new_conversation(umo, platform_id)
        return await conv_mgr.get_conversation(umo, cid)

