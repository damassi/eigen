import React from "react"

import { Image, ListView, ListViewDataSource, ScrollView, Text, View } from "react-native"
import { LargeHeadline } from "../Typography"

import colors from "lib/data/colors"
import fonts from "lib/data/fonts"
import styled from "styled-components/native"

const CenteredView = styled.View`
  background-color: ${colors["gray-light"]};
  align-items: center;
  width: 100%;
  height: 100%;
`

const VerticalLayout = styled.View`
  flex: 1;
  flex-direction: column;
  min-height: 400;
`

const HorizontalLayout = styled.View`
  flex: 1;
  flex-direction: row;
  margin-left: 20;
  margin-top: 50;
  margin-bottom: 50;
`

const Title = styled(LargeHeadline)`
  text-align: center;
  font-size: 30;
  line-height: 32;
  width: 280;
  margin-top: 35;
  align-self: center;
`

const SmallHeadline = styled(LargeHeadline)`
  font-size: 18;
  color: black;
  max-width: 280;
  min-height: 60;
`

const Icon = styled(Image)`
  resize-mode: contain;
  width: 40;
`

export default () =>
  <CenteredView>
    <VerticalLayout>
      <Title>Buying Art on Artsy is Simple </Title>
      <HorizontalLayout>
        <Icon source={require("../../../../../images/find.png")} />
        <SmallHeadline>Follow artists and find works you love</SmallHeadline>
      </HorizontalLayout>
      <HorizontalLayout>
        <Icon source={require("../../../../../images/contact.png")} />
        <SmallHeadline>Contact galleries or bid in auctions to purchase the work</SmallHeadline>
      </HorizontalLayout>
      <HorizontalLayout>
        <Icon source={require("../../../../../images/message.png")} />
        <SmallHeadline>Find your ongoing conversations and bidding activity here</SmallHeadline>
      </HorizontalLayout>
      <HorizontalLayout>
        <Icon source={require("../../../../../images/pay.png")} />
        <SmallHeadline>Easily process payment through our secure platform</SmallHeadline>
      </HorizontalLayout>
    </VerticalLayout>
  </CenteredView>
