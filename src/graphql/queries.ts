/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          blog {
            id
            name
            createdAt
            updatedAt
          }
          comments {
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          items {
            id
            title
            createdAt
            updatedAt
            blogPostsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          items {
            id
            title
            createdAt
            updatedAt
            blogPostsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          post {
            id
            title
            createdAt
            updatedAt
            blogPostsId
          }
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          posts {
            nextToken
          }
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            content
            createdAt
            updatedAt
            postCommentsId
          }
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          posts {
            nextToken
          }
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            content
            createdAt
            updatedAt
            postCommentsId
          }
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          blog {
            id
            name
            createdAt
            updatedAt
          }
          comments {
            nextToken
          }
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getAImageCarousel = /* GraphQL */ `
  query GetAImageCarousel($id: ID!) {
    getAImageCarousel(id: $id) {
      id
      image
      description
      route
      createdAt
      updatedAt
    }
  }
`;
export const listAImageCarousels = /* GraphQL */ `
  query ListAImageCarousels(
    $filter: ModelAImageCarouselFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAImageCarousels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        description
        route
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getABrand = /* GraphQL */ `
  query GetABrand($id: ID!) {
    getABrand(id: $id) {
      id
      name
      image
      phones {
        items {
          id
          name
          images
          maxPrice
          minPrice
          lastPrice
          suggestedPrice
          reviews
          ratings
          avgRating
          brandID
          brand {
            id
            name
            image
            createdAt
            updatedAt
          }
          productTypeID
          productType {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listABrands = /* GraphQL */ `
  query ListABrands(
    $filter: ModelABrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listABrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        phones {
          items {
            id
            name
            images
            maxPrice
            minPrice
            lastPrice
            suggestedPrice
            reviews
            ratings
            avgRating
            brandID
            productTypeID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAProductType = /* GraphQL */ `
  query GetAProductType($id: ID!) {
    getAProductType(id: $id) {
      id
      name
      image
      phones {
        items {
          id
          name
          images
          maxPrice
          minPrice
          lastPrice
          suggestedPrice
          reviews
          ratings
          avgRating
          brandID
          brand {
            id
            name
            image
            createdAt
            updatedAt
          }
          productTypeID
          productType {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAProductTypes = /* GraphQL */ `
  query ListAProductTypes(
    $filter: ModelAProductTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAProductTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        phones {
          items {
            id
            name
            images
            maxPrice
            minPrice
            lastPrice
            suggestedPrice
            reviews
            ratings
            avgRating
            brandID
            productTypeID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAPhone = /* GraphQL */ `
  query GetAPhone($id: ID!) {
    getAPhone(id: $id) {
      id
      name
      images
      maxPrice
      minPrice
      lastPrice
      suggestedPrice
      reviews
      ratings
      avgRating
      brandID
      brand {
        id
        name
        image
        phones {
          items {
            id
            name
            images
            maxPrice
            minPrice
            lastPrice
            suggestedPrice
            reviews
            ratings
            avgRating
            brandID
            productTypeID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      productTypeID
      productType {
        id
        name
        image
        phones {
          items {
            id
            name
            images
            maxPrice
            minPrice
            lastPrice
            suggestedPrice
            reviews
            ratings
            avgRating
            brandID
            productTypeID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAPhones = /* GraphQL */ `
  query ListAPhones(
    $filter: ModelAPhoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPhones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        images
        maxPrice
        minPrice
        lastPrice
        suggestedPrice
        reviews
        ratings
        avgRating
        brandID
        brand {
          id
          name
          image
          phones {
            nextToken
          }
          createdAt
          updatedAt
        }
        productTypeID
        productType {
          id
          name
          image
          phones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getACarrier = /* GraphQL */ `
  query GetACarrier($id: ID!) {
    getACarrier(id: $id) {
      id
      name
      image
      countryID
      country {
        id
        name
        officialName
        nativeName
        idd {
          root
          suffixes
        }
        googleMaps
        timeZone
        flag
        postalCode {
          format
          regex
        }
        carriers {
          items {
            id
            name
            image
            countryID
            createdAt
            updatedAt
          }
          nextToken
        }
        languages {
          items {
            id
            aCountryId
            aLanguageId
            createdAt
            updatedAt
          }
          nextToken
        }
        currencies {
          items {
            id
            aCountryId
            aCurrencieId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listACarriers = /* GraphQL */ `
  query ListACarriers(
    $filter: ModelACarrierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listACarriers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        countryID
        country {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getACountry = /* GraphQL */ `
  query GetACountry($id: ID!) {
    getACountry(id: $id) {
      id
      name
      officialName
      nativeName
      idd {
        root
        suffixes
      }
      googleMaps
      timeZone
      flag
      postalCode {
        format
        regex
      }
      carriers {
        items {
          id
          name
          image
          countryID
          country {
            id
            name
            officialName
            nativeName
            googleMaps
            timeZone
            flag
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      languages {
        items {
          id
          aCountryId
          aLanguageId
          aCountry {
            id
            name
            officialName
            nativeName
            googleMaps
            timeZone
            flag
            createdAt
            updatedAt
          }
          aLanguage {
            id
            name
            abbreviation
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      currencies {
        items {
          id
          aCountryId
          aCurrencieId
          aCountry {
            id
            name
            officialName
            nativeName
            googleMaps
            timeZone
            flag
            createdAt
            updatedAt
          }
          aCurrencie {
            id
            code
            name
            symbol
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listACountries = /* GraphQL */ `
  query ListACountries(
    $filter: ModelACountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listACountries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        officialName
        nativeName
        idd {
          root
          suffixes
        }
        googleMaps
        timeZone
        flag
        postalCode {
          format
          regex
        }
        carriers {
          items {
            id
            name
            image
            countryID
            createdAt
            updatedAt
          }
          nextToken
        }
        languages {
          items {
            id
            aCountryId
            aLanguageId
            createdAt
            updatedAt
          }
          nextToken
        }
        currencies {
          items {
            id
            aCountryId
            aCurrencieId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getALanguage = /* GraphQL */ `
  query GetALanguage($id: ID!) {
    getALanguage(id: $id) {
      id
      name
      abbreviation
      countries {
        items {
          id
          aCountryId
          aLanguageId
          aCountry {
            id
            name
            officialName
            nativeName
            googleMaps
            timeZone
            flag
            createdAt
            updatedAt
          }
          aLanguage {
            id
            name
            abbreviation
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listALanguages = /* GraphQL */ `
  query ListALanguages(
    $filter: ModelALanguageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listALanguages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        abbreviation
        countries {
          items {
            id
            aCountryId
            aLanguageId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getACurrencie = /* GraphQL */ `
  query GetACurrencie($id: ID!) {
    getACurrencie(id: $id) {
      id
      code
      name
      symbol
      countries {
        items {
          id
          aCountryId
          aCurrencieId
          aCountry {
            id
            name
            officialName
            nativeName
            googleMaps
            timeZone
            flag
            createdAt
            updatedAt
          }
          aCurrencie {
            id
            code
            name
            symbol
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listACurrencies = /* GraphQL */ `
  query ListACurrencies(
    $filter: ModelACurrencieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listACurrencies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        code
        name
        symbol
        countries {
          items {
            id
            aCountryId
            aCurrencieId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAGuidePhone = /* GraphQL */ `
  query GetAGuidePhone($id: ID!) {
    getAGuidePhone(id: $id) {
      id
      description
      width
      height
      depth
      weight
      display {
        resolution
        screenSize
        ppi
      }
      camera {
        primary
        secondary
        resolution
      }
      battery {
        capacity
        duration
        usb
      }
      colors {
        items {
          id
          aGuidePhoneId
          aColorId
          aGuidePhone {
            id
            description
            width
            height
            depth
            weight
            opSysyemID
            createdAt
            updatedAt
          }
          aColor {
            id
            name
            hexCode
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      storages {
        items {
          id
          aGuidePhoneId
          aStorageId
          aGuidePhone {
            id
            description
            width
            height
            depth
            weight
            opSysyemID
            createdAt
            updatedAt
          }
          aStorage {
            id
            numberGB
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      opSysyemID
      opSystem {
        id
        name
        image
        guidePhones {
          items {
            id
            description
            width
            height
            depth
            weight
            opSysyemID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAGuidePhones = /* GraphQL */ `
  query ListAGuidePhones(
    $filter: ModelAGuidePhoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAGuidePhones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        width
        height
        depth
        weight
        display {
          resolution
          screenSize
          ppi
        }
        camera {
          primary
          secondary
          resolution
        }
        battery {
          capacity
          duration
          usb
        }
        colors {
          items {
            id
            aGuidePhoneId
            aColorId
            createdAt
            updatedAt
          }
          nextToken
        }
        storages {
          items {
            id
            aGuidePhoneId
            aStorageId
            createdAt
            updatedAt
          }
          nextToken
        }
        opSysyemID
        opSystem {
          id
          name
          image
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAColor = /* GraphQL */ `
  query GetAColor($id: ID!) {
    getAColor(id: $id) {
      id
      name
      hexCode
      guidePhones {
        items {
          id
          aGuidePhoneId
          aColorId
          aGuidePhone {
            id
            description
            width
            height
            depth
            weight
            opSysyemID
            createdAt
            updatedAt
          }
          aColor {
            id
            name
            hexCode
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAColors = /* GraphQL */ `
  query ListAColors(
    $filter: ModelAColorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAColors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        hexCode
        guidePhones {
          items {
            id
            aGuidePhoneId
            aColorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAStorage = /* GraphQL */ `
  query GetAStorage($id: ID!) {
    getAStorage(id: $id) {
      id
      numberGB
      guidePhones {
        items {
          id
          aGuidePhoneId
          aStorageId
          aGuidePhone {
            id
            description
            width
            height
            depth
            weight
            opSysyemID
            createdAt
            updatedAt
          }
          aStorage {
            id
            numberGB
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAStorages = /* GraphQL */ `
  query ListAStorages(
    $filter: ModelAStorageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAStorages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numberGB
        guidePhones {
          items {
            id
            aGuidePhoneId
            aStorageId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAOpSystem = /* GraphQL */ `
  query GetAOpSystem($id: ID!) {
    getAOpSystem(id: $id) {
      id
      name
      image
      guidePhones {
        items {
          id
          description
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
          colors {
            nextToken
          }
          storages {
            nextToken
          }
          opSysyemID
          opSystem {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAOpSystems = /* GraphQL */ `
  query ListAOpSystems(
    $filter: ModelAOpSystemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAOpSystems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        guidePhones {
          items {
            id
            description
            width
            height
            depth
            weight
            opSysyemID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getACountriesLanguages = /* GraphQL */ `
  query GetACountriesLanguages($id: ID!) {
    getACountriesLanguages(id: $id) {
      id
      aCountryId
      aLanguageId
      aCountry {
        id
        name
        officialName
        nativeName
        idd {
          root
          suffixes
        }
        googleMaps
        timeZone
        flag
        postalCode {
          format
          regex
        }
        carriers {
          items {
            id
            name
            image
            countryID
            createdAt
            updatedAt
          }
          nextToken
        }
        languages {
          items {
            id
            aCountryId
            aLanguageId
            createdAt
            updatedAt
          }
          nextToken
        }
        currencies {
          items {
            id
            aCountryId
            aCurrencieId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      aLanguage {
        id
        name
        abbreviation
        countries {
          items {
            id
            aCountryId
            aLanguageId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listACountriesLanguages = /* GraphQL */ `
  query ListACountriesLanguages(
    $filter: ModelACountriesLanguagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listACountriesLanguages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aCountryId
        aLanguageId
        aCountry {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        aLanguage {
          id
          name
          abbreviation
          countries {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getACountriesCurrencies = /* GraphQL */ `
  query GetACountriesCurrencies($id: ID!) {
    getACountriesCurrencies(id: $id) {
      id
      aCountryId
      aCurrencieId
      aCountry {
        id
        name
        officialName
        nativeName
        idd {
          root
          suffixes
        }
        googleMaps
        timeZone
        flag
        postalCode {
          format
          regex
        }
        carriers {
          items {
            id
            name
            image
            countryID
            createdAt
            updatedAt
          }
          nextToken
        }
        languages {
          items {
            id
            aCountryId
            aLanguageId
            createdAt
            updatedAt
          }
          nextToken
        }
        currencies {
          items {
            id
            aCountryId
            aCurrencieId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      aCurrencie {
        id
        code
        name
        symbol
        countries {
          items {
            id
            aCountryId
            aCurrencieId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listACountriesCurrencies = /* GraphQL */ `
  query ListACountriesCurrencies(
    $filter: ModelACountriesCurrenciesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listACountriesCurrencies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aCountryId
        aCurrencieId
        aCountry {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        aCurrencie {
          id
          code
          name
          symbol
          countries {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAGuidePhonesColors = /* GraphQL */ `
  query GetAGuidePhonesColors($id: ID!) {
    getAGuidePhonesColors(id: $id) {
      id
      aGuidePhoneId
      aColorId
      aGuidePhone {
        id
        description
        width
        height
        depth
        weight
        display {
          resolution
          screenSize
          ppi
        }
        camera {
          primary
          secondary
          resolution
        }
        battery {
          capacity
          duration
          usb
        }
        colors {
          items {
            id
            aGuidePhoneId
            aColorId
            createdAt
            updatedAt
          }
          nextToken
        }
        storages {
          items {
            id
            aGuidePhoneId
            aStorageId
            createdAt
            updatedAt
          }
          nextToken
        }
        opSysyemID
        opSystem {
          id
          name
          image
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      aColor {
        id
        name
        hexCode
        guidePhones {
          items {
            id
            aGuidePhoneId
            aColorId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAGuidePhonesColors = /* GraphQL */ `
  query ListAGuidePhonesColors(
    $filter: ModelAGuidePhonesColorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAGuidePhonesColors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aGuidePhoneId
        aColorId
        aGuidePhone {
          id
          description
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
          colors {
            nextToken
          }
          storages {
            nextToken
          }
          opSysyemID
          opSystem {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        aColor {
          id
          name
          hexCode
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAGuidePhonesStorages = /* GraphQL */ `
  query GetAGuidePhonesStorages($id: ID!) {
    getAGuidePhonesStorages(id: $id) {
      id
      aGuidePhoneId
      aStorageId
      aGuidePhone {
        id
        description
        width
        height
        depth
        weight
        display {
          resolution
          screenSize
          ppi
        }
        camera {
          primary
          secondary
          resolution
        }
        battery {
          capacity
          duration
          usb
        }
        colors {
          items {
            id
            aGuidePhoneId
            aColorId
            createdAt
            updatedAt
          }
          nextToken
        }
        storages {
          items {
            id
            aGuidePhoneId
            aStorageId
            createdAt
            updatedAt
          }
          nextToken
        }
        opSysyemID
        opSystem {
          id
          name
          image
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      aStorage {
        id
        numberGB
        guidePhones {
          items {
            id
            aGuidePhoneId
            aStorageId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAGuidePhonesStorages = /* GraphQL */ `
  query ListAGuidePhonesStorages(
    $filter: ModelAGuidePhonesStoragesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAGuidePhonesStorages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aGuidePhoneId
        aStorageId
        aGuidePhone {
          id
          description
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
          colors {
            nextToken
          }
          storages {
            nextToken
          }
          opSysyemID
          opSystem {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        aStorage {
          id
          numberGB
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPhonesByBrandID = /* GraphQL */ `
  query APhonesByBrandID(
    $brandID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPhoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPhonesByBrandID(
      brandID: $brandID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        images
        maxPrice
        minPrice
        lastPrice
        suggestedPrice
        reviews
        ratings
        avgRating
        brandID
        brand {
          id
          name
          image
          phones {
            nextToken
          }
          createdAt
          updatedAt
        }
        productTypeID
        productType {
          id
          name
          image
          phones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPhonesByProductTypeID = /* GraphQL */ `
  query APhonesByProductTypeID(
    $productTypeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAPhoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aPhonesByProductTypeID(
      productTypeID: $productTypeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        images
        maxPrice
        minPrice
        lastPrice
        suggestedPrice
        reviews
        ratings
        avgRating
        brandID
        brand {
          id
          name
          image
          phones {
            nextToken
          }
          createdAt
          updatedAt
        }
        productTypeID
        productType {
          id
          name
          image
          phones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aCarriersByCountryID = /* GraphQL */ `
  query ACarriersByCountryID(
    $countryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelACarrierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aCarriersByCountryID(
      countryID: $countryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        image
        countryID
        country {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aGuidePhonesByOpSysyemID = /* GraphQL */ `
  query AGuidePhonesByOpSysyemID(
    $opSysyemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAGuidePhoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aGuidePhonesByOpSysyemID(
      opSysyemID: $opSysyemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        width
        height
        depth
        weight
        display {
          resolution
          screenSize
          ppi
        }
        camera {
          primary
          secondary
          resolution
        }
        battery {
          capacity
          duration
          usb
        }
        colors {
          items {
            id
            aGuidePhoneId
            aColorId
            createdAt
            updatedAt
          }
          nextToken
        }
        storages {
          items {
            id
            aGuidePhoneId
            aStorageId
            createdAt
            updatedAt
          }
          nextToken
        }
        opSysyemID
        opSystem {
          id
          name
          image
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aCountriesLanguagesByACountryId = /* GraphQL */ `
  query ACountriesLanguagesByACountryId(
    $aCountryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelACountriesLanguagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aCountriesLanguagesByACountryId(
      aCountryId: $aCountryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aCountryId
        aLanguageId
        aCountry {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        aLanguage {
          id
          name
          abbreviation
          countries {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aCountriesLanguagesByALanguageId = /* GraphQL */ `
  query ACountriesLanguagesByALanguageId(
    $aLanguageId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelACountriesLanguagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aCountriesLanguagesByALanguageId(
      aLanguageId: $aLanguageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aCountryId
        aLanguageId
        aCountry {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        aLanguage {
          id
          name
          abbreviation
          countries {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aCountriesCurrenciesByACountryId = /* GraphQL */ `
  query ACountriesCurrenciesByACountryId(
    $aCountryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelACountriesCurrenciesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aCountriesCurrenciesByACountryId(
      aCountryId: $aCountryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aCountryId
        aCurrencieId
        aCountry {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        aCurrencie {
          id
          code
          name
          symbol
          countries {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aCountriesCurrenciesByACurrencieId = /* GraphQL */ `
  query ACountriesCurrenciesByACurrencieId(
    $aCurrencieId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelACountriesCurrenciesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aCountriesCurrenciesByACurrencieId(
      aCurrencieId: $aCurrencieId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aCountryId
        aCurrencieId
        aCountry {
          id
          name
          officialName
          nativeName
          idd {
            root
            suffixes
          }
          googleMaps
          timeZone
          flag
          postalCode {
            format
            regex
          }
          carriers {
            nextToken
          }
          languages {
            nextToken
          }
          currencies {
            nextToken
          }
          createdAt
          updatedAt
        }
        aCurrencie {
          id
          code
          name
          symbol
          countries {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aGuidePhonesColorsByAGuidePhoneId = /* GraphQL */ `
  query AGuidePhonesColorsByAGuidePhoneId(
    $aGuidePhoneId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAGuidePhonesColorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aGuidePhonesColorsByAGuidePhoneId(
      aGuidePhoneId: $aGuidePhoneId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aGuidePhoneId
        aColorId
        aGuidePhone {
          id
          description
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
          colors {
            nextToken
          }
          storages {
            nextToken
          }
          opSysyemID
          opSystem {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        aColor {
          id
          name
          hexCode
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aGuidePhonesColorsByAColorId = /* GraphQL */ `
  query AGuidePhonesColorsByAColorId(
    $aColorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAGuidePhonesColorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aGuidePhonesColorsByAColorId(
      aColorId: $aColorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aGuidePhoneId
        aColorId
        aGuidePhone {
          id
          description
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
          colors {
            nextToken
          }
          storages {
            nextToken
          }
          opSysyemID
          opSystem {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        aColor {
          id
          name
          hexCode
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aGuidePhonesStoragesByAGuidePhoneId = /* GraphQL */ `
  query AGuidePhonesStoragesByAGuidePhoneId(
    $aGuidePhoneId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAGuidePhonesStoragesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aGuidePhonesStoragesByAGuidePhoneId(
      aGuidePhoneId: $aGuidePhoneId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aGuidePhoneId
        aStorageId
        aGuidePhone {
          id
          description
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
          colors {
            nextToken
          }
          storages {
            nextToken
          }
          opSysyemID
          opSystem {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        aStorage {
          id
          numberGB
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const aGuidePhonesStoragesByAStorageId = /* GraphQL */ `
  query AGuidePhonesStoragesByAStorageId(
    $aStorageId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAGuidePhonesStoragesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    aGuidePhonesStoragesByAStorageId(
      aStorageId: $aStorageId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        aGuidePhoneId
        aStorageId
        aGuidePhone {
          id
          description
          width
          height
          depth
          weight
          display {
            resolution
            screenSize
            ppi
          }
          camera {
            primary
            secondary
            resolution
          }
          battery {
            capacity
            duration
            usb
          }
          colors {
            nextToken
          }
          storages {
            nextToken
          }
          opSysyemID
          opSystem {
            id
            name
            image
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        aStorage {
          id
          numberGB
          guidePhones {
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
