import React, {useCallback} from "react";
import MainContainer from "../components/MainContainer";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { useTranslation } from 'next-i18next';

const LoadData = () => {

    // const { t } = useTranslation('header');


    return (
        <MainContainer keywords={"users page"} title={'Переводчик'}>
            <h1>Переводчик</h1>

            {/*<p>{t("personal_account","")}</p>*/}
        </MainContainer>
    );
};

export default LoadData;


// export async function getStaticProps({ locale }) {
//     return {
//         props: {
//             ...(await serverSideTranslations(locale, ['common', 'header'])),
//             // Will be passed to the page component as props
//         },
//     };
// }
