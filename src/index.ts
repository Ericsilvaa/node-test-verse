import User from "./entity/user.entity"
import UserFactory from "./factory/user.factory"


(async () => {
  const userFactory = await UserFactory.createInstance()

  await Promise.all(
    [
      new User({ first_name: 'John Doe', last_name: 'Doe' }),
      new User({ first_name: 'Eric Doe', last_name: 'Oliveira' }),
    ].map((user: User) => userFactory.create(user))
  )

  const users = await userFactory.find({})
  console.log("🚀 ~ users:", users)

})()