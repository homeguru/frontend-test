import React from 'react'

export interface LazyComponentProps {
    fetch: (p: unknown) => Promise<JSX.Element>;
    loaderComponent?: JSX.Element;
    errorComponent?: JSX.Element;
}

const LazyComponent = <T extends unknown>(
    { loaderComponent, errorComponent, fetch, ...props }: Readonly<LazyComponentProps & T>
) => {
    const [currentEl, setCurrentEl] = React.useState<JSX.Element>(loaderComponent! || <></>);

    React.useEffect(() => {
        const asyncCall = async () => {
            try {
                setCurrentEl(await fetch(props) || loaderComponent);
            } catch (e) {
                setCurrentEl(errorComponent! || loaderComponent! || null);
            }
        }
        asyncCall().then();
    }, [loaderComponent, errorComponent, fetch]);

    return currentEl;
}

export default LazyComponent;
