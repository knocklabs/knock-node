// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MsTeamsAPI from './ms-teams';
import {
  MsTeamCheckAuthParams,
  MsTeamCheckAuthResponse,
  MsTeamListChannelsParams,
  MsTeamListChannelsResponse,
  MsTeamListTeamsParams,
  MsTeamListTeamsResponse,
  MsTeamRevokeAccessParams,
  MsTeamRevokeAccessResponse,
  MsTeams,
} from './ms-teams';
import * as SlackAPI from './slack';
import {
  Slack,
  SlackCheckAuthParams,
  SlackCheckAuthResponse,
  SlackListChannelsParams,
  SlackListChannelsResponse,
  SlackRevokeAccessParams,
  SlackRevokeAccessResponse,
} from './slack';

export class Providers extends APIResource {
  slack: SlackAPI.Slack = new SlackAPI.Slack(this._client);
  msTeams: MsTeamsAPI.MsTeams = new MsTeamsAPI.MsTeams(this._client);
}

Providers.Slack = Slack;
Providers.MsTeams = MsTeams;

export declare namespace Providers {
  export {
    Slack as Slack,
    type SlackCheckAuthResponse as SlackCheckAuthResponse,
    type SlackListChannelsResponse as SlackListChannelsResponse,
    type SlackRevokeAccessResponse as SlackRevokeAccessResponse,
    type SlackCheckAuthParams as SlackCheckAuthParams,
    type SlackListChannelsParams as SlackListChannelsParams,
    type SlackRevokeAccessParams as SlackRevokeAccessParams,
  };

  export {
    MsTeams as MsTeams,
    type MsTeamCheckAuthResponse as MsTeamCheckAuthResponse,
    type MsTeamListChannelsResponse as MsTeamListChannelsResponse,
    type MsTeamListTeamsResponse as MsTeamListTeamsResponse,
    type MsTeamRevokeAccessResponse as MsTeamRevokeAccessResponse,
    type MsTeamCheckAuthParams as MsTeamCheckAuthParams,
    type MsTeamListChannelsParams as MsTeamListChannelsParams,
    type MsTeamListTeamsParams as MsTeamListTeamsParams,
    type MsTeamRevokeAccessParams as MsTeamRevokeAccessParams,
  };
}
