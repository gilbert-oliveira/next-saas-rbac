import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCannotDeleteSomeoneElse = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCannotDeleteSomeoneElse)
