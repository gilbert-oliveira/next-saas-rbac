import { defineAbilitiesFor } from '@saas/auth'

const ability = defineAbilitiesFor({ role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCannotDeleteSomeoneElse = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCannotDeleteSomeoneElse)
