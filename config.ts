import type { IConfig } from '@types'
import ms from 'ms'

export default <IConfig> {
    CHECK_MESSAGE: '\\._.',
    INTERAVL: ms('3 minutes'),
    GLOBAL_LIMIT: '5/15s',
    HOOK_LIMIT: '3/5s',
    LIMITS: {
        DELETE: 3,
        UPDATE: 5,
        CREATE: 4,
        ALL: 3
    },
    IGNORED_IDS: [
        // Owners
        '567399605877080071',
        // Administrator bots
        '235148962103951360', // Carl
        '282859044593598464', // ProBot
        '831661630424743946', // Discord Bot (my bot)
        '557628352828014614', // Ticket Tool
        '240254129333731328', // Vortex
        '841928041051848724', // Code Station
        // Channels
        '764473678686978048', // #Audit-log
        '800788335563505714', // #Mod-log
        '814453330486100008', // #Invites-log
    ]
}