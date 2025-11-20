# Shared

Types:

- <code><a href="./src/resources/shared.ts">Condition</a></code>
- <code><a href="./src/resources/shared.ts">PageInfo</a></code>

# Recipients

Types:

- <code><a href="./src/resources/recipients/recipients.ts">Recipient</a></code>
- <code><a href="./src/resources/recipients/recipients.ts">RecipientReference</a></code>
- <code><a href="./src/resources/recipients/recipients.ts">RecipientRequest</a></code>

## Subscriptions

Types:

- <code><a href="./src/resources/recipients/subscriptions.ts">Subscription</a></code>

## Preferences

Types:

- <code><a href="./src/resources/recipients/preferences.ts">InlinePreferenceSetRequest</a></code>
- <code><a href="./src/resources/recipients/preferences.ts">PreferenceSet</a></code>
- <code><a href="./src/resources/recipients/preferences.ts">PreferenceSetChannelSetting</a></code>
- <code><a href="./src/resources/recipients/preferences.ts">PreferenceSetChannelTypeSetting</a></code>
- <code><a href="./src/resources/recipients/preferences.ts">PreferenceSetChannelTypes</a></code>
- <code><a href="./src/resources/recipients/preferences.ts">PreferenceSetRequest</a></code>

## ChannelData

Types:

- <code><a href="./src/resources/recipients/channel-data.ts">AwsSnsPushChannelDataDevicesOnly</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">AwsSnsPushChannelDataTargetArnsOnly</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">ChannelData</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">ChannelDataRequest</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">DiscordChannelData</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">InlineChannelDataRequest</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">MsTeamsChannelData</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">OneSignalChannelDataPlayerIDsOnly</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">PushChannelDataDevicesOnly</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">PushChannelDataTokensOnly</a></code>
- <code><a href="./src/resources/recipients/channel-data.ts">SlackChannelData</a></code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">IdentifyUserRequest</a></code>
- <code><a href="./src/resources/users/users.ts">InlineIdentifyUserRequest</a></code>
- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserListPreferencesResponse</a></code>

Methods:

- <code title="put /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">update</a>(userID, { ...params }) -> User</code>
- <code title="get /v1/users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UsersEntriesCursor</code>
- <code title="delete /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(userID) -> void</code>
- <code title="get /v1/users/{user_id}">client.users.<a href="./src/resources/users/users.ts">get</a>(userID) -> User</code>
- <code title="get /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">getChannelData</a>(userID, channelID) -> ChannelData</code>
- <code title="get /v1/users/{user_id}/preferences/{id}">client.users.<a href="./src/resources/users/users.ts">getPreferences</a>(userID, id, { ...params }) -> PreferenceSet</code>
- <code title="get /v1/users/{user_id}/messages">client.users.<a href="./src/resources/users/users.ts">listMessages</a>(userID, { ...params }) -> MessagesItemsCursor</code>
- <code title="get /v1/users/{user_id}/preferences">client.users.<a href="./src/resources/users/users.ts">listPreferences</a>(userID) -> UserListPreferencesResponse</code>
- <code title="get /v1/users/{user_id}/schedules">client.users.<a href="./src/resources/users/users.ts">listSchedules</a>(userID, { ...params }) -> SchedulesEntriesCursor</code>
- <code title="get /v1/users/{user_id}/subscriptions">client.users.<a href="./src/resources/users/users.ts">listSubscriptions</a>(userID, { ...params }) -> SubscriptionsEntriesCursor</code>
- <code title="post /v1/users/{user_id}/merge">client.users.<a href="./src/resources/users/users.ts">merge</a>(userID, { ...params }) -> User</code>
- <code title="put /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">setChannelData</a>(userID, channelID, { ...params }) -> ChannelData</code>
- <code title="put /v1/users/{user_id}/preferences/{id}">client.users.<a href="./src/resources/users/users.ts">setPreferences</a>(userID, id, { ...params }) -> PreferenceSet</code>
- <code title="delete /v1/users/{user_id}/channel_data/{channel_id}">client.users.<a href="./src/resources/users/users.ts">unsetChannelData</a>(userID, channelID) -> void</code>

## Feeds

Types:

- <code><a href="./src/resources/users/feeds.ts">FeedGetSettingsResponse</a></code>
- <code><a href="./src/resources/users/feeds.ts">FeedListItemsResponse</a></code>

Methods:

- <code title="get /v1/users/{user_id}/feeds/{id}/settings">client.users.feeds.<a href="./src/resources/users/feeds.ts">getSettings</a>(userID, id) -> FeedGetSettingsResponse</code>
- <code title="get /v1/users/{user_id}/feeds/{id}">client.users.feeds.<a href="./src/resources/users/feeds.ts">listItems</a>(userID, id, { ...params }) -> FeedListItemsResponsesEntriesCursor</code>

## Guides

Types:

- <code><a href="./src/resources/users/guides.ts">GuideGetChannelResponse</a></code>
- <code><a href="./src/resources/users/guides.ts">GuideMarkMessageAsArchivedResponse</a></code>
- <code><a href="./src/resources/users/guides.ts">GuideMarkMessageAsInteractedResponse</a></code>
- <code><a href="./src/resources/users/guides.ts">GuideMarkMessageAsSeenResponse</a></code>

Methods:

- <code title="get /v1/users/{user_id}/guides/{channel_id}">client.users.guides.<a href="./src/resources/users/guides.ts">getChannel</a>(userID, channelID, { ...params }) -> GuideGetChannelResponse</code>
- <code title="put /v1/users/{user_id}/guides/messages/{message_id}/archived">client.users.guides.<a href="./src/resources/users/guides.ts">markMessageAsArchived</a>(userID, messageID, { ...params }) -> GuideMarkMessageAsArchivedResponse</code>
- <code title="put /v1/users/{user_id}/guides/messages/{message_id}/interacted">client.users.guides.<a href="./src/resources/users/guides.ts">markMessageAsInteracted</a>(userID, messageID, { ...params }) -> GuideMarkMessageAsInteractedResponse</code>
- <code title="put /v1/users/{user_id}/guides/messages/{message_id}/seen">client.users.guides.<a href="./src/resources/users/guides.ts">markMessageAsSeen</a>(userID, messageID, { ...params }) -> GuideMarkMessageAsSeenResponse</code>

## Bulk

Methods:

- <code title="post /v1/users/bulk/delete">client.users.bulk.<a href="./src/resources/users/bulk.ts">delete</a>({ ...params }) -> BulkOperation</code>
- <code title="post /v1/users/bulk/identify">client.users.bulk.<a href="./src/resources/users/bulk.ts">identify</a>({ ...params }) -> BulkOperation</code>
- <code title="post /v1/users/bulk/preferences">client.users.bulk.<a href="./src/resources/users/bulk.ts">setPreferences</a>({ ...params }) -> BulkOperation</code>

# Objects

Types:

- <code><a href="./src/resources/objects/objects.ts">InlineObjectRequest</a></code>
- <code><a href="./src/resources/objects/objects.ts">Object</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectAddSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectDeleteSubscriptionsResponse</a></code>
- <code><a href="./src/resources/objects/objects.ts">ObjectListPreferencesResponse</a></code>

Methods:

- <code title="get /v1/objects/{collection}">client.objects.<a href="./src/resources/objects/objects.ts">list</a>(collection, { ...params }) -> ObjectsEntriesCursor</code>
- <code title="delete /v1/objects/{collection}/{id}">client.objects.<a href="./src/resources/objects/objects.ts">delete</a>(collection, id) -> void</code>
- <code title="post /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">addSubscriptions</a>(collection, objectID, { ...params }) -> ObjectAddSubscriptionsResponse</code>
- <code title="delete /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">deleteSubscriptions</a>(collection, objectID, { ...params }) -> ObjectDeleteSubscriptionsResponse</code>
- <code title="get /v1/objects/{collection}/{id}">client.objects.<a href="./src/resources/objects/objects.ts">get</a>(collection, id) -> Object</code>
- <code title="get /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">getChannelData</a>(collection, objectID, channelID) -> ChannelData</code>
- <code title="get /v1/objects/{collection}/{object_id}/preferences/{id}">client.objects.<a href="./src/resources/objects/objects.ts">getPreferences</a>(collection, objectID, id) -> PreferenceSet</code>
- <code title="get /v1/objects/{collection}/{id}/messages">client.objects.<a href="./src/resources/objects/objects.ts">listMessages</a>(collection, id, { ...params }) -> MessagesItemsCursor</code>
- <code title="get /v1/objects/{collection}/{object_id}/preferences">client.objects.<a href="./src/resources/objects/objects.ts">listPreferences</a>(collection, objectID) -> ObjectListPreferencesResponse</code>
- <code title="get /v1/objects/{collection}/{id}/schedules">client.objects.<a href="./src/resources/objects/objects.ts">listSchedules</a>(collection, id, { ...params }) -> SchedulesEntriesCursor</code>
- <code title="get /v1/objects/{collection}/{object_id}/subscriptions">client.objects.<a href="./src/resources/objects/objects.ts">listSubscriptions</a>(collection, objectID, { ...params }) -> SubscriptionsEntriesCursor</code>
- <code title="put /v1/objects/{collection}/{id}">client.objects.<a href="./src/resources/objects/objects.ts">set</a>(collection, id, { ...params }) -> Object</code>
- <code title="put /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">setChannelData</a>(collection, objectID, channelID, { ...params }) -> ChannelData</code>
- <code title="put /v1/objects/{collection}/{object_id}/preferences/{id}">client.objects.<a href="./src/resources/objects/objects.ts">setPreferences</a>(collection, objectID, id, { ...params }) -> PreferenceSet</code>
- <code title="delete /v1/objects/{collection}/{object_id}/channel_data/{channel_id}">client.objects.<a href="./src/resources/objects/objects.ts">unsetChannelData</a>(collection, objectID, channelID) -> void</code>

## Bulk

Methods:

- <code title="post /v1/objects/{collection}/bulk/delete">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">delete</a>(collection, { ...params }) -> BulkOperation</code>
- <code title="post /v1/objects/{collection}/bulk/subscriptions/add">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">addSubscriptions</a>(collection, { ...params }) -> BulkOperation</code>
- <code title="post /v1/objects/{collection}/bulk/subscriptions/delete">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">deleteSubscriptions</a>(collection, { ...params }) -> BulkOperation</code>
- <code title="post /v1/objects/{collection}/bulk/set">client.objects.bulk.<a href="./src/resources/objects/bulk.ts">set</a>(collection, { ...params }) -> BulkOperation</code>

# Tenants

Types:

- <code><a href="./src/resources/tenants/tenants.ts">InlineTenantRequest</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">Tenant</a></code>
- <code><a href="./src/resources/tenants/tenants.ts">TenantRequest</a></code>

Methods:

- <code title="get /v1/tenants">client.tenants.<a href="./src/resources/tenants/tenants.ts">list</a>({ ...params }) -> TenantsEntriesCursor</code>
- <code title="delete /v1/tenants/{id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">delete</a>(id) -> void</code>
- <code title="get /v1/tenants/{id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">get</a>(id, { ...params }) -> Tenant</code>
- <code title="put /v1/tenants/{id}">client.tenants.<a href="./src/resources/tenants/tenants.ts">set</a>(id, { ...params }) -> Tenant</code>

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

- <code title="get /v1/messages">client.messages.<a href="./src/resources/messages/messages.ts">list</a>({ ...params }) -> MessagesItemsCursor</code>
- <code title="put /v1/messages/{message_id}/archived">client.messages.<a href="./src/resources/messages/messages.ts">archive</a>(messageID) -> Message</code>
- <code title="get /v1/messages/{message_id}">client.messages.<a href="./src/resources/messages/messages.ts">get</a>(messageID) -> Message</code>
- <code title="get /v1/messages/{message_id}/content">client.messages.<a href="./src/resources/messages/messages.ts">getContent</a>(messageID) -> MessageGetContentResponse</code>
- <code title="get /v1/messages/{message_id}/activities">client.messages.<a href="./src/resources/messages/messages.ts">listActivities</a>(messageID, { ...params }) -> ActivitiesItemsCursor</code>
- <code title="get /v1/messages/{message_id}/delivery_logs">client.messages.<a href="./src/resources/messages/messages.ts">listDeliveryLogs</a>(messageID, { ...params }) -> MessageDeliveryLogsItemsCursor</code>
- <code title="get /v1/messages/{message_id}/events">client.messages.<a href="./src/resources/messages/messages.ts">listEvents</a>(messageID, { ...params }) -> MessageEventsItemsCursor</code>
- <code title="put /v1/messages/{message_id}/interacted">client.messages.<a href="./src/resources/messages/messages.ts">markAsInteracted</a>(messageID, { ...params }) -> Message</code>
- <code title="put /v1/messages/{message_id}/read">client.messages.<a href="./src/resources/messages/messages.ts">markAsRead</a>(messageID) -> Message</code>
- <code title="put /v1/messages/{message_id}/seen">client.messages.<a href="./src/resources/messages/messages.ts">markAsSeen</a>(messageID) -> Message</code>
- <code title="delete /v1/messages/{message_id}/read">client.messages.<a href="./src/resources/messages/messages.ts">markAsUnread</a>(messageID) -> Message</code>
- <code title="delete /v1/messages/{message_id}/seen">client.messages.<a href="./src/resources/messages/messages.ts">markAsUnseen</a>(messageID) -> Message</code>
- <code title="delete /v1/messages/{message_id}/archived">client.messages.<a href="./src/resources/messages/messages.ts">unarchive</a>(messageID) -> Message</code>

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
- <code title="get /v1/providers/slack/{channel_id}/channels">client.providers.slack.<a href="./src/resources/providers/slack.ts">listChannels</a>(channelID, { ...params }) -> SlackListChannelsResponsesSlackChannelsCursor</code>
- <code title="put /v1/providers/slack/{channel_id}/revoke_access">client.providers.slack.<a href="./src/resources/providers/slack.ts">revokeAccess</a>(channelID, { ...params }) -> SlackRevokeAccessResponse</code>

## MsTeams

Types:

- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamCheckAuthResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamListChannelsResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamListTeamsResponse</a></code>
- <code><a href="./src/resources/providers/ms-teams.ts">MsTeamRevokeAccessResponse</a></code>

Methods:

- <code title="get /v1/providers/ms-teams/{channel_id}/auth_check">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">checkAuth</a>(channelID, { ...params }) -> MsTeamCheckAuthResponse</code>
- <code title="get /v1/providers/ms-teams/{channel_id}/channels">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">listChannels</a>(channelID, { ...params }) -> MsTeamListChannelsResponse</code>
- <code title="get /v1/providers/ms-teams/{channel_id}/teams">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">listTeams</a>(channelID, { ...params }) -> MsTeamListTeamsResponsesMsTeamsPagination</code>
- <code title="put /v1/providers/ms-teams/{channel_id}/revoke_access">client.providers.msTeams.<a href="./src/resources/providers/ms-teams.ts">revokeAccess</a>(channelID, { ...params }) -> MsTeamRevokeAccessResponse</code>

# Integrations

## Census

Types:

- <code><a href="./src/resources/integrations/census.ts">CensusCustomDestinationResponse</a></code>

Methods:

- <code title="post /v1/integrations/census/custom-destination">client.integrations.census.<a href="./src/resources/integrations/census.ts">customDestination</a>({ ...params }) -> CensusCustomDestinationResponse</code>

## Hightouch

Types:

- <code><a href="./src/resources/integrations/hightouch.ts">HightouchEmbeddedDestinationResponse</a></code>

Methods:

- <code title="post /v1/integrations/hightouch/embedded-destination">client.integrations.hightouch.<a href="./src/resources/integrations/hightouch.ts">embeddedDestination</a>({ ...params }) -> HightouchEmbeddedDestinationResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows.ts">WorkflowTriggerResponse</a></code>

Methods:

- <code title="post /v1/workflows/{key}/cancel">client.workflows.<a href="./src/resources/workflows.ts">cancel</a>(key, { ...params }) -> void</code>
- <code title="post /v1/workflows/{key}/trigger">client.workflows.<a href="./src/resources/workflows.ts">trigger</a>(key, { ...params }) -> WorkflowTriggerResponse</code>

# Schedules

Types:

- <code><a href="./src/resources/schedules/schedules.ts">Schedule</a></code>
- <code><a href="./src/resources/schedules/schedules.ts">ScheduleRepeatRule</a></code>
- <code><a href="./src/resources/schedules/schedules.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/schedules/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/schedules/schedules.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /v1/schedules">client.schedules.<a href="./src/resources/schedules/schedules.ts">create</a>({ ...params }) -> ScheduleCreateResponse</code>
- <code title="put /v1/schedules">client.schedules.<a href="./src/resources/schedules/schedules.ts">update</a>({ ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /v1/schedules">client.schedules.<a href="./src/resources/schedules/schedules.ts">list</a>({ ...params }) -> SchedulesEntriesCursor</code>
- <code title="delete /v1/schedules">client.schedules.<a href="./src/resources/schedules/schedules.ts">delete</a>({ ...params }) -> ScheduleDeleteResponse</code>

## Bulk

Methods:

- <code title="post /v1/schedules/bulk/create">client.schedules.bulk.<a href="./src/resources/schedules/bulk.ts">create</a>({ ...params }) -> BulkOperation</code>

# Channels

## Bulk

Methods:

- <code title="post /v1/channels/{channel_id}/messages/bulk/{action}">client.channels.bulk.<a href="./src/resources/channels/bulk.ts">updateMessageStatus</a>(channelID, action, { ...params }) -> BulkOperation</code>

# Audiences

Types:

- <code><a href="./src/resources/audiences.ts">AudienceMember</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceListMembersResponse</a></code>

Methods:

- <code title="post /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">addMembers</a>(key, { ...params }) -> void</code>
- <code title="get /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">listMembers</a>(key) -> AudienceListMembersResponse</code>
- <code title="delete /v1/audiences/{key}/members">client.audiences.<a href="./src/resources/audiences.ts">removeMembers</a>(key, { ...params }) -> void</code>
