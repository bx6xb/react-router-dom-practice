import adidasModel1 from "../assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp"
import adidasModel2 from "../assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp"
import adidasModel3 from "../assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp"
import pumaModel1 from "../assets/puma/puma_ca_pro_classic.jpg"
import pumaModel2 from "../assets/puma/puma_ca_pro_green.webp"
import pumaModel3 from "../assets/puma/puma_suede_classic_xxi.avif"

const initialState: BrandsState = [
  {
    title: "ADIDAS",
    sneakers: [
      {
        id: 1,
        model: "ADIDAS ADIFOM TRXN",
        collection: "new collection1",
        price: "100200$",
        picture: adidasModel1,
      },
      {
        id: 2,
        model: "ADIDAS ADIFOM SUPER",
        collection: "new collection22",
        price: "200300$",
        picture: adidasModel2,
      },
      {
        id: 3,
        model: "ADIDAS SUPER SUPERSKI",
        collection: "new collection333",
        price: "300400$",
        picture: adidasModel3,
      },
    ],
    contentText: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
      an unknown printer took a galley of type and scrambled it to make a type specimen book. It
      has survived not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a
      long established fact that a reader will be distracted by the readable content of a page
      when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using 'Content here, content here', making it
      look like readable English. Many desktop publishing packages and web page editors now use
      Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
      web sites still in their infancy. Various versions have evolved over the years, sometimes by
      accident, sometimes on purpose (injected humour and the like). Where does it come from?
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
      of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
      a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
      Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
      word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
      sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
      Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
      popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.`,
    pagePath: "adidas",
  },
  {
    title: "PUMA",
    sneakers: [
      {
        id: 1,
        model: "Puma Ca Pro Classic",
        collection: "new collection1",
        price: "100200$",
        picture: pumaModel1,
      },
      {
        id: 2,
        model: "Puma Ca Pro Green",
        collection: "new collection22",
        price: "200300$",
        picture: pumaModel2,
      },
      {
        id: 3,
        model: "Puma Suede Classic XXI",
        collection: "new collection333",
        price: "300400$",
        picture: pumaModel3,
      },
    ],
    contentText: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged. It was popularised in the 1960s with
      the release of Letraset sheets containing Lorem Ipsum passages, and more
      recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum. Why do we use it? It is a long established fact
      that a reader will be distracted by the readable content of a page when
      looking at its layout. The point of using Lorem Ipsum is that it has a
      more-or-less normal distribution of letters, as opposed to using
      'Content here, content here', making it look like readable English. Many
      desktop publishing packages and web page editors now use Lorem Ipsum as
      their default model text, and a search for 'lorem ipsum' will uncover
      many web sites still in their infancy. Various versions have evolved
      over the years, sometimes by accident, sometimes on purpose (injected
      humour and the like). Where does it come from? Contrary to popular
      belief, Lorem Ipsum is not simply random text. It has roots in a piece
      of classical Latin literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney College in
      Virginia, looked up one of the more obscure Latin words, consectetur,
      from a Lorem Ipsum passage, and going through the cites of the word in
      classical literature, discovered the undoubtable source. Lorem Ipsum
      comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
      This book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.`,
    pagePath: "puma",
  },
  {
    title: "ABIBAS",
    sneakers: [],
    contentText: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard
    dummy text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book. It has survived
    not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with
    the release of Letraset sheets containing Lorem Ipsum passages, and more
    recently with desktop publishing software like Aldus PageMaker including
    versions of Lorem Ipsum. Why do we use it? It is a long established fact
    that a reader will be distracted by the readable content of a page when
    looking at its layout. The point of using Lorem Ipsum is that it has a
    more-or-less normal distribution of letters, as opposed to using
    'Content here, content here', making it look like readable English. Many
    desktop publishing packages and web page editors now use Lorem Ipsum as
    their default model text, and a search for 'lorem ipsum' will uncover
    many web sites still in their infancy. Various versions have evolved
    over the years, sometimes by accident, sometimes on purpose (injected
    humour and the like). Where does it come from? Contrary to popular
    belief, Lorem Ipsum is not simply random text. It has roots in a piece
    of classical Latin literature from 45 BC, making it over 2000 years old.
    Richard McClintock, a Latin professor at Hampden-Sydney College in
    Virginia, looked up one of the more obscure Latin words, consectetur,
    from a Lorem Ipsum passage, and going through the cites of the word in
    classical literature, discovered the undoubtable source. Lorem Ipsum
    comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
    Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
    This book is a treatise on the theory of ethics, very popular during the
    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
    amet..", comes from a line in section 1.10.32.`,
    pagePath: "abibas",
  },
]

export const brandsReducer = (
  state: BrandsState = initialState,
  action: BrandsReducerAction
): BrandsState => {
  switch (action.type) {
    default:
      return state
  }
}

// types
export type SneakersItem = {
  id: number
  model: string
  collection: string
  price: string
  picture: string
}
export type BrandInfo = {
  title: string
  sneakers: SneakersItem[] | []
  contentText: string
  pagePath: string
}
export type BrandsState = BrandInfo[]
export type BrandsReducerAction = any
