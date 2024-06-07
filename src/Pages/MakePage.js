import styled from "styled-components";
import { Container100to100 } from "../Components/Layout";

function MakePage() {
    return (
        <Container100to100>
            <ContainerMakePage>
                <ContainerInputInfo>

                </ContainerInputInfo>
                <ContainerOutput>
                    <OutputImage>
                        <Image></Image>
                        <Image></Image>
                        <Image></Image>
                        <Image></Image>
                    </OutputImage>
                </ContainerOutput>
            </ContainerMakePage>
        </Container100to100>
    )
}

const ContainerMakePage = styled.div`
    width: 1200px;
    height : 700px;
    background-color: red;

    display: flex;
`;
const ContainerInputInfo = styled.div`
    width: 70%;
    height: 100%;
    background-color: blue;
`;  

const ContainerOutput = styled.div`
    width: 30%;
    height: 100%;
    background-color: green;

    padding : 30px;
    box-sizing: border-box;
`;
const OutputImage = styled.div`
    width: 270px;
    height : 100%;
    background-color: orange;

    display: flex;
    align-items : center;
    flex-direction: column;
    box-sizing: border-box;
`;

const Image = styled.img`
    width: 250px;
    height : 165px;
    background-color: white;
`
export default MakePage;