// without defined matcher this line applies next-auth to all project 

//export {default} from "next-auth/middleware"

// Applies next-auth only to the matching routescan be regex
export const config = {matcher:["/src/app/extra/page.tsx","/dashboard"]}