import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import device from 'themes/device'
import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`
const StyledText = styled(Text)`
    padding-top: 8px;

    @media ${device.tabletL} {
        padding-top: 0;
        margin: 12px 0;
    }
`

const StyledContainer = styled(Container)`
    width: 100%;
    margin-top: 3rem;
    @media ${device.tabletL} {
        flex-direction: column;
        background-color: #f2f3f4;
        margin-top: 0;
        padding: 3rem 0;
    }
`

const DNumbers = ({ items, justify }) => {
    return (
        <StyledContainer justify={justify || 'space-between'}>
            {items.map((item, index) => (
                <NumberWrapper key={index}>
                    <Header as="p" type="page-title" align="center">
                        {item.title}
                    </Header>
                    <StyledText align="center">{item.subtitle}</StyledText>
                </NumberWrapper>
            ))}
        </StyledContainer>
    )
}

DNumbers.propTypes = {
    items: PropTypes.array,
    justify: PropTypes.string,
}
export default DNumbers
