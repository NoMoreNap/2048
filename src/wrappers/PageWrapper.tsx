import styled from "@emotion/styled";
import React from "react";
import {Props} from "../interfaces/props.interface";
import {Box} from "@mui/material";
import { SparklesCore } from "../components/ui/sparkles";
import {useGlobalValue} from "elum-state/react";
import {PAGE} from "../states/elum";

const StyledMainDiv = styled('div')({
    background: 'linear-gradient(180deg, #472A85 0%, #202C9B 27.5%, #0C1459 59%, #200D30 100%)',
    width: '100vw',
    height: '100vh',
    position: 'relative'
});

export const PagesWrapper: React.FC<Props> = ({children}) => {
    const page = useGlobalValue(PAGE)
    return (
        <StyledMainDiv className={page !== 'top' ? 'center' : ''}>
            <Box
                sx={{
                    backgroundImage: 'url(/assets/backgrounds/lights.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    pointerEvents: 'none',
                    opacity: .025,
                    top: 0,
                    left: 0
                }}
            />
            <Box sx={{
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                zIndex: 0
            }}>
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={.5}
                    maxSize={2.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </Box>
            {children}
        </StyledMainDiv>
    )
}
