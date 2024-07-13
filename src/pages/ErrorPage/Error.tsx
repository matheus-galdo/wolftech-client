import { useLocation } from "react-router-dom";

export default function Error() {
    // const error = useRouteError();
    const location = useLocation();
    // console.log({ location, error });
    console.log({ location,  });

    return <div>
        {/* {isRouteErrorResponse(error) ? <> */}
            {/* Ocorreu um erro: {error.status} */}
        {/* </> : <> */}
            Occorreu um erro inesperado
        {/* </>} */}
    </div>;
}