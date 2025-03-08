# Shared

Types:

- <code><a href="./src/resources/shared.ts">Condition</a></code>

# Recipients

Types:

- <code><a href="./src/resources/recipients.ts">ChannelData</a></code>
- <code><a href="./src/resources/recipients.ts">ChannelDataRequest</a></code>
- <code><a href="./src/resources/recipients.ts">DiscordChannelData</a></code>
- <code><a href="./src/resources/recipients.ts">InlineChannelDataRequest</a></code>
- <code><a href="./src/resources/recipients.ts">InlinePreferenceSetRequest</a></code>
- <code><a href="./src/resources/recipients.ts">MsTeamsChannelData</a></code>
- <code><a href="./src/resources/recipients.ts">OneSignalChannelData</a></code>
- <code><a href="./src/resources/recipients.ts">PreferenceSet</a></code>
- <code><a href="./src/resources/recipients.ts">PreferenceSetChannelTypeSetting</a></code>
- <code><a href="./src/resources/recipients.ts">PreferenceSetChannelTypes</a></code>
- <code><a href="./src/resources/recipients.ts">PreferenceSetRequest</a></code>
- <code><a href="./src/resources/recipients.ts">PushChannelData</a></code>
- <code><a href="./src/resources/recipients.ts">Recipient</a></code>
- <code><a href="./src/resources/recipients.ts">RecipientRequest</a></code>
- <code><a href="./src/resources/recipients.ts">SlackChannelData</a></code>
- <code><a href="./src/resources/recipients.ts">Subscription</a></code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">IdentifyUserRequest</a></code>
- <code><a href="./src/resources/users/users.ts">InlineIdentifyUserRequest</a></code>
- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListPreferencesResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserUnsetChannelDataResponse</a></code>

Methods:

- <code title="put /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">update</a>(userID, { ...params }) -> User</code>
- <code title="get /v1/users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UsersEntriesCursor</code>
- <code title="delete /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(userID) -> string</code>
- <code title="get /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">get</a>(userID) -> User</code>
- <code title="get /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">getChannelData</a>(userID, channelID) -> ChannelData</code>
- <code title="get /v1/users/{user_id}/preferences/{preference_set_id}">client.users.<a href="./src/resources/users/users.ts">getPreferences</a>(userID, preferenceSetID, { ...params }) -> PreferenceSet</code>
- <code title="get /v1/users/{user_id}/messages">client.users.<a href="./src/resources/users/users.ts">listMessages</a>(userID, { ...params }) -> MessagesEntriesCursor</code>
- <code title="get /v1/users/{user_id}/preferences">client.users.<a href="./src/resources/users/users.ts">listPreferences</a>(userID) -> UserListPreferencesResponse</code>
- <code title="get /v1/users/{user_id}/schedules">client.users.<a href="./src/resources/users/users.ts">listSchedules</a>(userID, { ...params }) -> SchedulesEntriesCursor</code>
- <code title="get /v1/users/{user_id}/subscriptions">client.users.<a href="./src/resources/users/users.ts">listSubscriptions</a>(userID, { ...params }) -> SubscriptionsEntriesCursor</code>
- <code title="post /v1/users/{user_id}/merge">client.users.<a href="./src/resources/users/users.ts">merge</a>(userID, { ...params }) -> User</code>
- <code title="put /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">setChannelData</a>(userID, channelID, { ...params }) -> ChannelData</code>
- <code title="put /v1/users/{user_id}/preferences/{preference_set_id}">client.users.<a href="./src/resources/users/users.ts">setPreferences</a>(userID, preferenceSetID, { ...params }) -> PreferenceSet</code>
- <code title="delete /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">unsetChannelData</a>(userID, channelID) -> string</code>

## Feeds

Types:

- <code><a href="./src/resources/users/feeds.ts">FeedGetSettingsResponse</a></code>
- <code><a href="./src/resources/users/feeds.ts">FeedListItemsResponse</a></code>

Methods:

- <code title="get /v1/users/{user_id}/feeds/{channel_id}/settings">client.users.feeds.<a href="./src/resources/users/feeds.ts">getSettings</a>(userID, channelID) -> FeedGetSettingsResponse</code>
- <code title="get /v1/users/{user_id}/feeds/{channel_id}">client.users.feeds.<a href="./src/resources/users/feeds.ts">listItems</a>(userID, channelID, { ...params }) -> FeedListItemsResponsesEntriesCursor</code>

## Bulk

Methods:

- <code title="post /v1/users/bulk/delete">client.users.bulk.<a href="./src/resources/users/bulk.ts">delete</a>({ ...params }) -> BulkOperation</code>
- <code title="post /v1/users/bulk/identify">client.users.bulk.<a href="./src/resources/users/bulk.ts">identify</a>({ ...params }) -> BulkOperation</code>
- <code title="post /v1/users/bulk/preferences">client.users.bulk.<a href="./src/resources/users/bulk.ts">setPreferences</a>({ ...params }) -> BulkOperation</code>

# Objects

Types:

- <code><a href="./src/resources/objects/objects.ts">InlineObjectRequest</a></code>
- <code><a href="./src/resources/objects/objects.ts">Object</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectDeleteResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectAddSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectDeleteSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectUnsetChannelDataResponse</a></code>

Methods:

- <code title="get /v1/objects/{collection}">client.objects.<a href="./src/resources/objects/objects.ts">list</a>(collection, { ...params }) -> ObjectsEntriesCursor</code>
- <code title="delete /v1/objects/{collection}/{object_id}">client.objects.<a href="./src/resources/objects/objects.ts">delete</a>(collection, objectID) -> string</code>
- <code title="post /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">addSubscriptions</a>(collection, objectID, { ...params }) -> ObjectAddSubscriptionsResponse</code>
- <code title="delete /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">deleteSubscriptions</a>(collection, objectID, { ...params }) -> ObjectDeleteSubscriptionsResponse</code>
- <code title="get /v1/objects/{collection}/{object_id}">client.objects.<a href="./src/resources/objects/objects.ts">get</a>(collection, objectID) -> Object</code>
- <code title="get /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">getChannelData</a>(collection, objectID, channelID) -> ChannelData</code>
- <code title="get /v1/objects/{collection}/{object_id}/preferences/{preference_set_id}">client.objects.<a href="./src/resources/objects/objects.ts">getPreferences</a>(collection, objectID, preferenceSetID, { ...params }) -> PreferenceSet</code>
- <code title="get /v1/objects/{collection}/{object_id}/messages">client.objects.<a href="./src/resources/objects/objects.ts">listMessages</a>(collection, objectID, { ...params }) -> MessagesEntriesCursor</code>
- <code title="get /v1/objects/{collection}/{object_id}/schedules">client.objects.<a href="./src/resources/objects/objects.ts">listSchedules</a>(collection, objectID, { ...params }) -> SchedulesEntriesCursor</code>
- <code title="get /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">listSubscriptions</a>(collection, objectID, { ...params }) -> SubscriptionsEntriesCursor</code>
- <code title="put /v1/objects/{collection}/{object_id}">client.objects.<a href="./src/resources/objects/objects.ts">set</a>(collection, objectID, { ...params }) -> Object</code>
- <code title="put /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">setChannelData</a>(collection, objectID, channelID, { ...params }) -> ChannelData</code>
- <code title="put /v1/objects/{collection}/{object_id}/preferences/{preference_set_id}">client.objects.<a href="./src/resources/objects/objects.ts">setPreferences</a>(collection, objectID, preferenceSetID, { ...params }) -> PreferenceSet</code>
- <code title="delete /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">unsetChannelData</a>(collection, objectID, channelID) -> string</code>

## Bulk

Methods:

- <code title="post /v1/objects/{collection}/bulk/delete">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">delete</a>(collection, { ...params }) -> BulkOperation</code>
- <code title="post /v1/objects/{collection}/bulk/subscriptions/add">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">addSubscriptions</a>(collection, { ...params }) -> BulkOperation</code>
- <code title="post /v1/objects/{collection}/bulk/set">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">set</a>(collection, { ...params }) -> BulkOperation</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants/tenants.ts">InlineTenantRequest</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">Tenant</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantRequest</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantDeleteResponse</a></code>

Methods:

- <code title="get /v1/tenants">client.tenants.<a href="./src/resources/tenants/tenants.ts">list</a>({ ...params }) -> TenantsEntriesCursor</code>
- <code title="delete /v1/tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">delete</a>(tenantID) -> string</code>
- <code title="get /v1/tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">get</a>(tenantID) -> Tenant</code>
- <code title="put /v1/tenants/{tenant_id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">set</a>(tenantID, { ...params }) -> Tenant</code>

## Bulk

Methods:

- <code title="post /v1/tenants/bulk/delete">client.tenants.bulk.<a href="./src/resources/tenants/bulk.ts">delete</a>({ ...params }) -> BulkOperation</code>
- <code title="post /v1/tenants/bulk/set">client.tenants.bulk.<a href="./src/resources/tenants/bulk.ts">set</a>({ ...params }) -> BulkOperation</code>

# BulkOperations

Types:

- <code><a href="./src/resources/bulk-operations.ts">BulkOperation</a></code>

Methods:

- <code title="get /v1/bulk_operations/{id}">client.bulkOperations.<a href="./src/resources/bulk-operations.ts">get</a>(id) -> BulkOperation</code>

# Messages

Types:

- <code><a href="./src/resources/messages/messages.ts">Activity</a></code>
- <code><a href="./src/resources/messages/messages.ts">Message</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageDeliveryLog</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageEvent</a></code>
- <code><a href="./src/resources/messages/messages.ts">MessageGetContentResponse</a></code>

Methods:

- <code title="get /v1/messages">client.messages.<a href="./src/resources/messages/messages.ts">list</a>({ ...params }) -> MessagesEntriesCursor</code>
- <code title="put /v1/messages/{message_id}/archived">client.messages.<a href="./src/resources/messages/messages.ts">archive</a>(messageID) -> Message</code>
- <code title="get /v1/messages/{message_id}">client.messages.<a href="./src/resources/messages/messages.ts">get</a>(messageID) -> Message</code>
- <code title="get /v1/messages/{message_id}/content">client.messages.<a href="./src/resources/messages/messages.ts">getContent</a>(messageID) -> MessageGetContentResponse</code>
- <code title="get /v1/messages/{message_id}/activities">client.messages.<a href="./src/resources/messages/messages.ts">listActivities</a>(messageID, { ...params }) -> ActivitiesItemsCursor</code>
- <code title="get /v1/messages/{message_id}/delivery_logs">client.messages.<a href="./src/resources/messages/messages.ts">listDeliveryLogs</a>(messageID, { ...params }) -> MessageDeliveryLogsEntriesCursor</code>
- <code title="get /v1/messages/{message_id}/events">client.messages.<a href="./src/resources/messages/messages.ts">listEvents</a>(messageID, { ...params }) -> MessageEventsEntriesCursor</code>
- <code title="put /v1/messages/{message_id}/interacted">client.messages.<a href="./src/resources/messages/messages.ts">markAsInteracted</a>(messageID, { ...params }) -> Message</code>
- <code title="put /v1/messages/{message_id}/read">client.messages.<a href="./src/resources/messages/messages.ts">markAsRead</a>(messageID) -> Message</code>
- <code title="put /v1/messages/{message_id}/seen">client.messages.<a href="./src/resources/messages/messages.ts">markAsSeen</a>(messageID) -> Message</code>
- <code title="delete /v1/messages/{message_id}/unread">client.messages.<a href="./src/resources/messages/messages.ts">markAsUnread</a>(messageID) -> Message</code>
- <code title="delete /v1/messages/{message_id}/unseen">client.messages.<a href="./src/resources/messages/messages.ts">markAsUnseen</a>(messageID) -> Message</code>
- <code title="delete /v1/messages/{message_id}/unarchived">client.messages.<a href="./src/resources/messages/messages.ts">unarchive</a>(messageID) -> Message</code>

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

- <code title="get /v1/providers/slack/{channel_id}/auth_check">client.providers.slack.<a href="./src/resources/providers/slack.ts">checkAuth</a>(channelID, { ...params }) -> SlackCheckAuthResponse</code>
- <code title="get /v1/providers/slack/{channel_id}/channels">client.providers.slack.<a href="./src/resources/providers/slack.ts">listChannels</a>(channelID, { ...params }) -> SlackListChannelsResponse</code>
- <code title="put /v1/providers/slack/{channel_id}/revoke_access">client.providers.slack.<a href="./src/resources/providers/slack.ts">revokeAccess</a>(channelID, { ...params }) -> string</code>

## MsTeams

Types:

- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamCheckAuthResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamListChannelsResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamListTeamsResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamRevokeAccessResponse</a></code>

Methods:

- <code title="get /v1/providers/ms-teams/{channel_id}/auth_check">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">checkAuth</a>(channelID, { ...params }) -> MsTeamCheckAuthResponse</code>
- <code title="get /v1/providers/ms-teams/{channel_id}/channels">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">listChannels</a>(channelID, { ...params }) -> MsTeamListChannelsResponse</code>
- <code title="get /v1/providers/ms-teams/{channel_id}/teams">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">listTeams</a>(channelID, { ...params }) -> MsTeamListTeamsResponse</code>
- <code title="put /v1/providers/ms-teams/{channel_id}/revoke_access">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">revokeAccess</a>(channelID, { ...params }) -> string</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">WorkflowCancelResponse</a></code>
- <code><a href="./src/resources/workflows.ts">WorkflowTriggerResponse</a></code>

Methods:

- <code title="post /v1/workflows/{key}/cancel">client.workflows.<a href="./src/resources/workflows.ts">cancel</a>(key, { ...params }) -> string</code>
- <code title="post /v1/workflows/{key}/trigger">client.workflows.<a href="./src/resources/workflows.ts">trigger</a>(key, { ...params }) -> WorkflowTriggerResponse</code>

# Schedules

Types:

- <code><a href="./src/resources/schedules.ts">Schedule</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleRepeatRule</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/schedules.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">create</a>({ ...params }) -> ScheduleCreateResponse</code>
- <code title="put /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">update</a>({ ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">list</a>({ ...params }) -> SchedulesEntriesCursor</code>
- <code title="delete /v1/schedules">client.schedules.<a href="./src/resources/schedules.ts">delete</a>({ ...params }) -> ScheduleDeleteResponse</code>

# Channels

## Bulk

Methods:

- <code title="post /v1/channels/{channel_id}/messages/bulk/{action}">client.channels.bulk.<a href="./src/resources/channels/bulk.ts">updateMessageStatus</a>(channelID, action, { ...params }) -> BulkOperation</code>

# Audiences

Types:

- <code><a href="./src/resources/audiences.ts">AudienceMember</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceAddMembersResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceListMembersResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceRemoveMembersResponse</a></code>

Methods:

- <code title="post /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">addMembers</a>(key, { ...params }) -> string</code>
- <code title="get /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">listMembers</a>(key) -> AudienceListMembersResponse</code>
- <code title="delete /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">removeMembers</a>(key, { ...params }) -> string</code>
