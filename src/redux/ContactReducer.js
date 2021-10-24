const initialState = [
    {
        id:1,
        name : "Siva",
        email : "ab@a.com",
        number : 12345
    },
    {
        id:2,
        name : "Rama",
        email : "ba@a.com",
        number : 54321
    }
]

const ContactReducer = (state=initialState , action) => {
    switch (action.type){
        case "ADD_STUDENT":
            state = [...state,action.payload]
            return state

          case "UPDATE_CONTACT" :
              const updatestate =state.map(contact => contact.id === action.payload.id?action.payload:contact)
              //console.log("contact.id",contact.id)
              console.log("action.payload.id",action.payload.id)
              console.log("action.payload",action.payload)
              //console.log("ccontact",contact)
              state=updatestate
              return state 
              
            case "DELTE_CONTACT" :
                const filtercontacts = state.filter(contact=>contact.id!==action.payload) 
                state=filtercontacts
                return state

        default : return state

    }
}
export default ContactReducer