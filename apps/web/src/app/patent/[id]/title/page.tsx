import Title, { IdeaDataType } from "@/app/patent/[id]/title/_page";
import { trpcVanilla } from "@/trpc/server";
import { GetServerSidePropsContext } from "next";

const TitleServer = async (context: GetServerSidePropsContext) => {
    const response = await trpcVanilla.ideas.get.query({
        id: (context.params?.id as string) ?? "",
    });

    return <Title data={response.data} />;
};

export default TitleServer;