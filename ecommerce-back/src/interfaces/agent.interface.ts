import { AGENT_OPTIONS, ROLE_TYPE } from "src/common/enums/role-type.enum";

interface Agent {
    
    role: ROLE_TYPE;
    agentOptions: AGENT_OPTIONS
    //agentOptions?: ROLE_TYPE === ROLE_TYPE.AGENT ? AGENT_OPTIONS : undefined;
    
    //id: number
    //name: string
    //email: string
    
}

//EJEMPLO DE USO
//const user: Agent = {
//    role: ROLE_TYPE.AGENT,
//    agentOptions: AGENT_OPTIONS.MARKETING
//}

export default Agent