# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserGetChannelDataResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserGetPreferencesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListMessagesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListPreferencesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListSchedulesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListSubscriptionsResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserSetChannelDataResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserSetPreferencesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserUnsetChannelDataResponse</a></code>

Methods:

- <code title="put /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">update</a>(userId, { ...params }) -> User</code>
- <code title="get /v1/users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(userId) -> string</code>
- <code title="get /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">get</a>(userId) -> User</code>
- <code title="get /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">getChannelData</a>(userId, channelId) -> UserGetChannelDataResponse</code>
- <code title="get /v1/users/{user_id}/preferences/{id}">client.users.<a href="./src/resources/users/users.ts">getPreferences</a>(userId, id, { ...params }) -> UserGetPreferencesResponse</code>
- <code title="get /v1/users/{user_id}/messages">client.users.<a href="./src/resources/users/users.ts">listMessages</a>(userId, { ...params }) -> UserListMessagesResponse</code>
- <code title="get /v1/users/{user_id}/preferences">client.users.<a href="./src/resources/users/users.ts">listPreferences</a>(userId) -> UserListPreferencesResponse</code>
- <code title="get /v1/users/{user_id}/schedules">client.users.<a href="./src/resources/users/users.ts">listSchedules</a>(userId, { ...params }) -> UserListSchedulesResponse</code>
- <code title="get /v1/users/{user_id}/subscriptions">client.users.<a href="./src/resources/users/users.ts">listSubscriptions</a>(userId, { ...params }) -> UserListSubscriptionsResponse</code>
- <code title="post /v1/users/{user_id}/merge">client.users.<a href="./src/resources/users/users.ts">merge</a>(userId, { ...params }) -> User</code>
- <code title="put /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">setChannelData</a>(userId, channelId, { ...params }) -> UserSetChannelDataResponse</code>
- <code title="put /v1/users/{user_id}/preferences/{id}">client.users.<a href="./src/resources/users/users.ts">setPreferences</a>(userId, id, { ...params }) -> UserSetPreferencesResponse</code>
- <code title="delete /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">unsetChannelData</a>(userId, channelId) -> string</code>

## Feeds

Types:

- <code><a href="./src/resources/users/feeds.ts">FeedGetResponse</a></code>
- <code><a href="./src/resources/users/feeds.ts">FeedGetSettingsResponse</a></code>

Methods:

- <code title="get /v1/users/{user_id}/feeds/{id}">client.users.feeds.<a href="./src/resources/users/feeds.ts">get</a>(userId, id, { ...params }) -> FeedGetResponse</code>
- <code title="get /v1/users/{user_id}/feeds/{id}/settings">client.users.feeds.<a href="./src/resources/users/feeds.ts">getSettings</a>(userId, id) -> FeedGetSettingsResponse</code>

## Bulk

Types:

- <code><a href="./src/resources/users/bulk.ts">BulkDeleteResponse</a></code>
- <code><a href="./src/resources/users/bulk.ts">BulkIdentifyResponse</a></code>
- <code><a href="./src/resources/users/bulk.ts">BulkSetPreferencesResponse</a></code>

Methods:

- <code title="post /v1/users/bulk/delete">client.users.bulk.<a href="./src/resources/users/bulk.ts">delete</a>({ ...params }) -> BulkDeleteResponse</code>
- <code title="post /v1/users/bulk/identify">client.users.bulk.<a href="./src/resources/users/bulk.ts">identify</a>({ ...params }) -> BulkIdentifyResponse</code>
- <code title="post /v1/users/bulk/preferences">client.users.bulk.<a href="./src/resources/users/bulk.ts">setPreferences</a>({ ...params }) -> BulkSetPreferencesResponse</code>

# Objects

Types:

- <code><a href="./src/resources/objects/objects.ts">ObjectListResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectAddSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectDeleteSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectGetResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectGetChannelDataResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectGetPreferencesResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectListPreferencesResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectListSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectSetResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectSetChannelDataResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectSetPreferencesResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectUnsetChannelDataResponse</a></code>

Methods:

- <code title="get /v1/objects/{collection}">client.objects.<a href="./src/resources/objects/objects.ts">list</a>(collection, { ...params }) -> ObjectListResponse</code>
- <code title="delete /v1/objects/{collection}/{id}">client.objects.<a href="./src/resources/objects/objects.ts">delete</a>(collection, id) -> string</code>
- <code title="post /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">addSubscriptions</a>(collection, objectId, { ...params }) -> ObjectAddSubscriptionsResponse</code>
- <code title="delete /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">deleteSubscriptions</a>(collection, objectId, { ...params }) -> ObjectDeleteSubscriptionsResponse</code>
- <code title="get /v1/objects/{collection}/{id}">client.objects.<a href="./src/resources/objects/objects.ts">get</a>(collection, id) -> ObjectGetResponse</code>
- <code title="get /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">getChannelData</a>(collection, objectId, channelId) -> ObjectGetChannelDataResponse</code>
- <code title="get /v1/objects/{collection}/{object_id}/preferences/{id}">client.objects.<a href="./src/resources/objects/objects.ts">getPreferences</a>(collection, objectId, id, { ...params }) -> ObjectGetPreferencesResponse</code>
- <code title="get /v1/objects/{collection}/{object_id}/preferences">client.objects.<a href="./src/resources/objects/objects.ts">listPreferences</a>(collection, objectId) -> ObjectListPreferencesResponse</code>
- <code title="get /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">listSubscriptions</a>(collection, objectId, { ...params }) -> ObjectListSubscriptionsResponse</code>
- <code title="put /v1/objects/{collection}/{id}">client.objects.<a href="./src/resources/objects/objects.ts">set</a>(collection, id, { ...params }) -> ObjectSetResponse</code>
- <code title="put /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">setChannelData</a>(collection, objectId, channelId, { ...params }) -> ObjectSetChannelDataResponse</code>
- <code title="put /v1/objects/{collection}/{object_id}/preferences/{id}">client.objects.<a href="./src/resources/objects/objects.ts">setPreferences</a>(collection, objectId, id, { ...params }) -> ObjectSetPreferencesResponse</code>
- <code title="delete /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">unsetChannelData</a>(collection, objectId, channelId) -> string</code>

## Bulk

Types:

- <code><a href="./src/resources/objects/bulk.ts">BulkDeleteResponse</a></code>
- <code><a href="./src/resources/objects/bulk.ts">BulkAddSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/bulk.ts">BulkSetResponse</a></code>

Methods:

- <code title="post /v1/objects/{collection}/bulk/delete">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">delete</a>(collection, { ...params }) -> BulkDeleteResponse</code>
- <code title="post /v1/objects/{collection}/bulk/subscriptions/add">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">addSubscriptions</a>(collection, { ...params }) -> BulkAddSubscriptionsResponse</code>
- <code title="post /v1/objects/{collection}/bulk/set">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">set</a>(collection, { ...params }) -> BulkSetResponse</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants/tenants.ts">TenantListResponse</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantDeleteResponse</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantGetResponse</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantSetResponse</a></code>

Methods:

- <code title="get /v1/tenants">client.tenants.<a href="./src/resources/tenants/tenants.ts">list</a>({ ...params }) -> TenantListResponse</code>
- <code title="delete /v1/tenants/{id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">delete</a>(id) -> string</code>
- <code title="get /v1/tenants/{id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">get</a>(id) -> TenantGetResponse</code>
- <code title="put /v1/tenants/{id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">set</a>(id, { ...params }) -> TenantSetResponse</code>

## Bulk

Types:

- <code><a href="./src/resources/tenants/bulk.ts">BulkDeleteResponse</a></code>
- <code><a href="./src/resources/tenants/bulk.ts">BulkSetResponse</a></code>

Methods:

- <code title="post /v1/tenants/bulk/delete">client.tenants.bulk.<a href="./src/resources/tenants/bulk.ts">delete</a>({ ...params }) -> BulkDeleteResponse</code>
- <code title="post /v1/tenants/bulk/set">client.tenants.bulk.<a href="./src/resources/tenants/bulk.ts">set</a>({ ...params }) -> BulkSetResponse</code>

# BulkOperations

Types:

- <code><a href="./src/resources/bulk-operations.ts">BulkOperationGetResponse</a></code>

Methods:

- <code title="get /v1/bulk_operations/{id}">client.bulkOperations.<a href="./src/resources/bulk-operations.ts">get</a>(id) -> BulkOperationGetResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages/messages.ts">MessageListResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageArchiveResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageGetResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageGetContentResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageListActivitiesResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageListDeliveryLogsResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageListEventsResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageMarkAsInteractedResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageMarkAsReadResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageMarkAsSeenResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageMarkAsUnreadResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageMarkAsUnseenResponse</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageUnarchiveResponse</a></code>

Methods:

- <code title="get /v1/messages">client.messages.<a href="./src/resources/messages/messages.ts">list</a>({ ...params }) -> MessageListResponse</code>
- <code title="put /v1/messages/{message_id}/archived">client.messages.<a href="./src/resources/messages/messages.ts">archive</a>(messageId) -> MessageArchiveResponse</code>
- <code title="get /v1/messages/{message_id}">client.messages.<a href="./src/resources/messages/messages.ts">get</a>(messageId) -> MessageGetResponse</code>
- <code title="get /v1/messages/{message_id}/content">client.messages.<a href="./src/resources/messages/messages.ts">getContent</a>(messageId) -> MessageGetContentResponse</code>
- <code title="get /v1/messages/{message_id}/activities">client.messages.<a href="./src/resources/messages/messages.ts">listActivities</a>(messageId, { ...params }) -> MessageListActivitiesResponse</code>
- <code title="get /v1/messages/{message_id}/delivery_logs">client.messages.<a href="./src/resources/messages/messages.ts">listDeliveryLogs</a>(messageId, { ...params }) -> MessageListDeliveryLogsResponse</code>
- <code title="get /v1/messages/{message_id}/events">client.messages.<a href="./src/resources/messages/messages.ts">listEvents</a>(messageId, { ...params }) -> MessageListEventsResponse</code>
- <code title="put /v1/messages/{message_id}/interacted">client.messages.<a href="./src/resources/messages/messages.ts">markAsInteracted</a>(messageId, { ...params }) -> MessageMarkAsInteractedResponse</code>
- <code title="put /v1/messages/{message_id}/read">client.messages.<a href="./src/resources/messages/messages.ts">markAsRead</a>(messageId) -> MessageMarkAsReadResponse</code>
- <code title="put /v1/messages/{message_id}/seen">client.messages.<a href="./src/resources/messages/messages.ts">markAsSeen</a>(messageId) -> MessageMarkAsSeenResponse</code>
- <code title="delete /v1/messages/{message_id}/unread">client.messages.<a href="./src/resources/messages/messages.ts">markAsUnread</a>(messageId) -> MessageMarkAsUnreadResponse</code>
- <code title="delete /v1/messages/{message_id}/unseen">client.messages.<a href="./src/resources/messages/messages.ts">markAsUnseen</a>(messageId) -> MessageMarkAsUnseenResponse</code>
- <code title="delete /v1/messages/{message_id}/unarchived">client.messages.<a href="./src/resources/messages/messages.ts">unarchive</a>(messageId) -> MessageUnarchiveResponse</code>

## Batch

Types:

- <code><a href="./src/resources/messages/batch.ts">BatchArchiveResponse</a></code>
- <code><a href="./src/resources/messages/batch.ts">BatchGetContentResponse</a></code>
- <code><a href="./src/resources/messages/batch.ts">BatchMarkAsInteractedResponse</a></code>
- <code><a href="./src/resources/messages/batch.ts">BatchMarkAsReadResponse</a></code>
- <code><a href="./src/resources/messages/batch.ts">BatchMarkAsSeenResponse</a></code>
- <code><a href="./src/resources/messages/batch.ts">BatchMarkAsUnreadResponse</a></code>
- <code><a href="./src/resources/messages/batch.ts">BatchMarkAsUnseenResponse</a></code>
- <code><a href="./src/resources/messages/batch.ts">BatchUnarchiveResponse</a></code>

Methods:

- <code title="post /v1/messages/batch/archived">client.messages.batch.<a href="./src/resources/messages/batch.ts">archive</a>({ ...params }) -> BatchArchiveResponse</code>
- <code title="get /v1/messages/batch/content">client.messages.batch.<a href="./src/resources/messages/batch.ts">getContent</a>({ ...params }) -> BatchGetContentResponse</code>
- <code title="post /v1/messages/batch/interacted">client.messages.batch.<a href="./src/resources/messages/batch.ts">markAsInteracted</a>({ ...params }) -> BatchMarkAsInteractedResponse</code>
- <code title="post /v1/messages/batch/read">client.messages.batch.<a href="./src/resources/messages/batch.ts">markAsRead</a>({ ...params }) -> BatchMarkAsReadResponse</code>
- <code title="post /v1/messages/batch/seen">client.messages.batch.<a href="./src/resources/messages/batch.ts">markAsSeen</a>({ ...params }) -> BatchMarkAsSeenResponse</code>
- <code title="post /v1/messages/batch/unread">client.messages.batch.<a href="./src/resources/messages/batch.ts">markAsUnread</a>({ ...params }) -> BatchMarkAsUnreadResponse</code>
- <code title="post /v1/messages/batch/unseen">client.messages.batch.<a href="./src/resources/messages/batch.ts">markAsUnseen</a>({ ...params }) -> BatchMarkAsUnseenResponse</code>
- <code title="post /v1/messages/batch/unarchived">client.messages.batch.<a href="./src/resources/messages/batch.ts">unarchive</a>({ ...params }) -> BatchUnarchiveResponse</code>

# Providers

## Slack

Types:

- <code><a href="./src/resources/providers/slack.ts">SlackCheckAuthResponse</a></code>
- <code><a href="./src/resources/providers/slack.ts">SlackListChannelsResponse</a></code>
- <code><a href="./src/resources/providers/slack.ts">SlackRevokeAccessResponse</a></code>

Methods:

- <code title="get /v1/providers/slack/{channel_id}/auth_check">client.providers.slack.<a href="./src/resources/providers/slack.ts">checkAuth</a>(channelId, { ...params }) -> SlackCheckAuthResponse</code>
- <code title="get /v1/providers/slack/{channel_id}/channels">client.providers.slack.<a href="./src/resources/providers/slack.ts">listChannels</a>(channelId, { ...params }) -> SlackListChannelsResponse</code>
- <code title="put /v1/providers/slack/{channel_id}/revoke_access">client.providers.slack.<a href="./src/resources/providers/slack.ts">revokeAccess</a>(channelId, { ...params }) -> string</code>

## MsTeams

Types:

- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamCheckAuthResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamListChannelsResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamListTeamsResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamRevokeAccessResponse</a></code>

Methods:

- <code title="get /v1/providers/ms-teams/{channel_id}/auth_check">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">checkAuth</a>(channelId, { ...params }) -> MsTeamCheckAuthResponse</code>
- <code title="get /v1/providers/ms-teams/{channel_id}/channels">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">listChannels</a>(channelId, { ...params }) -> MsTeamListChannelsResponse</code>
- <code title="get /v1/providers/ms-teams/{channel_id}/teams">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">listTeams</a>(channelId, { ...params }) -> MsTeamListTeamsResponse</code>
- <code title="put /v1/providers/ms-teams/{channel_id}/revoke_access">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">revokeAccess</a>(channelId, { ...params }) -> string</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">WorkflowCancelResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowTriggerResponse</a></code>

Methods:

- <code title="post /v1/workflows/{key}/cancel">client.workflows.<a href="./src/resources/workflows.ts">cancel</a>(key, { ...params }) -> string</code>
- <code title="post /v1/workflows/{key}/trigger">client.workflows.<a href="./src/resources/workflows.ts">trigger</a>(key, { ...params }) -> WorkflowTriggerResponse</code>

# Schedules

Types:

- <code><a href="./src/resources/schedules.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleListResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">create</a>({ ...params }) -> ScheduleCreateResponse</code>
- <code title="put /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">update</a>({ ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">list</a>({ ...params }) -> ScheduleListResponse</code>
- <code title="delete /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">delete</a>({ ...params }) -> ScheduleDeleteResponse</code>

# Channels

## Bulk

Types:

- <code><a href="./src/resources/channels/bulk.ts">BulkUpdateMessageStatusResponse</a></code>

Methods:

- <code title="post /v1/channels/{channel_id}/messages/bulk/{action}">client.channels.bulk.<a href="./src/resources/channels/bulk.ts">updateMessageStatus</a>(channelId, action, { ...params }) -> BulkUpdateMessageStatusResponse</code>

# Audiences

Types:

- <code><a href="./src/resources/audiences.ts">AudienceAddMembersResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceListMembersResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceRemoveMembersResponse</a></code>

Methods:

- <code title="post /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">addMembers</a>(key, { ...params }) -> string</code>
- <code title="get /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">listMembers</a>(key) -> AudienceListMembersResponse</code>
- <code title="delete /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">removeMembers</a>(key, { ...params }) -> string</code>
