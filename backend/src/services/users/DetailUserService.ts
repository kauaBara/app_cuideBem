import Prisma from "../../prisma";

const DetailUserService = async ({ user_id }: { user_id: string }) => {
    if (!user_id) return { messageError: 'User invalid!' }

    const user = await Prisma.user.findFirst({
        where: { id: user_id },
        select: { id: true, name: true, email: true, photo: true, phone_number: true, crm: true, role_id: true }
    })

    return user
}

export default DetailUserService;