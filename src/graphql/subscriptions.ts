/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateAImageCarousel = /* GraphQL */ `
  subscription OnCreateAImageCarousel(
    $filter: ModelSubscriptionAImageCarouselFilterInput
  ) {
    onCreateAImageCarousel(filter: $filter) {
      id
      image
      description
      route
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAImageCarousel = /* GraphQL */ `
  subscription OnUpdateAImageCarousel(
    $filter: ModelSubscriptionAImageCarouselFilterInput
  ) {
    onUpdateAImageCarousel(filter: $filter) {
      id
      image
      description
      route
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAImageCarousel = /* GraphQL */ `
  subscription OnDeleteAImageCarousel(
    $filter: ModelSubscriptionAImageCarouselFilterInput
  ) {
    onDeleteAImageCarousel(filter: $filter) {
      id
      image
      description
      route
      createdAt
      updatedAt
    }
  }
`;
export const onCreateABrand = /* GraphQL */ `
  subscription OnCreateABrand($filter: ModelSubscriptionABrandFilterInput) {
    onCreateABrand(filter: $filter) {
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
export const onUpdateABrand = /* GraphQL */ `
  subscription OnUpdateABrand($filter: ModelSubscriptionABrandFilterInput) {
    onUpdateABrand(filter: $filter) {
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
export const onDeleteABrand = /* GraphQL */ `
  subscription OnDeleteABrand($filter: ModelSubscriptionABrandFilterInput) {
    onDeleteABrand(filter: $filter) {
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
export const onCreateAProductType = /* GraphQL */ `
  subscription OnCreateAProductType(
    $filter: ModelSubscriptionAProductTypeFilterInput
  ) {
    onCreateAProductType(filter: $filter) {
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
export const onUpdateAProductType = /* GraphQL */ `
  subscription OnUpdateAProductType(
    $filter: ModelSubscriptionAProductTypeFilterInput
  ) {
    onUpdateAProductType(filter: $filter) {
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
export const onDeleteAProductType = /* GraphQL */ `
  subscription OnDeleteAProductType(
    $filter: ModelSubscriptionAProductTypeFilterInput
  ) {
    onDeleteAProductType(filter: $filter) {
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
export const onCreateAPhone = /* GraphQL */ `
  subscription OnCreateAPhone($filter: ModelSubscriptionAPhoneFilterInput) {
    onCreateAPhone(filter: $filter) {
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
export const onUpdateAPhone = /* GraphQL */ `
  subscription OnUpdateAPhone($filter: ModelSubscriptionAPhoneFilterInput) {
    onUpdateAPhone(filter: $filter) {
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
export const onDeleteAPhone = /* GraphQL */ `
  subscription OnDeleteAPhone($filter: ModelSubscriptionAPhoneFilterInput) {
    onDeleteAPhone(filter: $filter) {
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
export const onCreateACarrier = /* GraphQL */ `
  subscription OnCreateACarrier($filter: ModelSubscriptionACarrierFilterInput) {
    onCreateACarrier(filter: $filter) {
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
export const onUpdateACarrier = /* GraphQL */ `
  subscription OnUpdateACarrier($filter: ModelSubscriptionACarrierFilterInput) {
    onUpdateACarrier(filter: $filter) {
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
export const onDeleteACarrier = /* GraphQL */ `
  subscription OnDeleteACarrier($filter: ModelSubscriptionACarrierFilterInput) {
    onDeleteACarrier(filter: $filter) {
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
export const onCreateACountry = /* GraphQL */ `
  subscription OnCreateACountry($filter: ModelSubscriptionACountryFilterInput) {
    onCreateACountry(filter: $filter) {
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
export const onUpdateACountry = /* GraphQL */ `
  subscription OnUpdateACountry($filter: ModelSubscriptionACountryFilterInput) {
    onUpdateACountry(filter: $filter) {
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
export const onDeleteACountry = /* GraphQL */ `
  subscription OnDeleteACountry($filter: ModelSubscriptionACountryFilterInput) {
    onDeleteACountry(filter: $filter) {
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
export const onCreateALanguage = /* GraphQL */ `
  subscription OnCreateALanguage(
    $filter: ModelSubscriptionALanguageFilterInput
  ) {
    onCreateALanguage(filter: $filter) {
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
export const onUpdateALanguage = /* GraphQL */ `
  subscription OnUpdateALanguage(
    $filter: ModelSubscriptionALanguageFilterInput
  ) {
    onUpdateALanguage(filter: $filter) {
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
export const onDeleteALanguage = /* GraphQL */ `
  subscription OnDeleteALanguage(
    $filter: ModelSubscriptionALanguageFilterInput
  ) {
    onDeleteALanguage(filter: $filter) {
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
export const onCreateACurrencie = /* GraphQL */ `
  subscription OnCreateACurrencie(
    $filter: ModelSubscriptionACurrencieFilterInput
  ) {
    onCreateACurrencie(filter: $filter) {
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
export const onUpdateACurrencie = /* GraphQL */ `
  subscription OnUpdateACurrencie(
    $filter: ModelSubscriptionACurrencieFilterInput
  ) {
    onUpdateACurrencie(filter: $filter) {
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
export const onDeleteACurrencie = /* GraphQL */ `
  subscription OnDeleteACurrencie(
    $filter: ModelSubscriptionACurrencieFilterInput
  ) {
    onDeleteACurrencie(filter: $filter) {
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
export const onCreateAGuidePhone = /* GraphQL */ `
  subscription OnCreateAGuidePhone(
    $filter: ModelSubscriptionAGuidePhoneFilterInput
  ) {
    onCreateAGuidePhone(filter: $filter) {
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
export const onUpdateAGuidePhone = /* GraphQL */ `
  subscription OnUpdateAGuidePhone(
    $filter: ModelSubscriptionAGuidePhoneFilterInput
  ) {
    onUpdateAGuidePhone(filter: $filter) {
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
export const onDeleteAGuidePhone = /* GraphQL */ `
  subscription OnDeleteAGuidePhone(
    $filter: ModelSubscriptionAGuidePhoneFilterInput
  ) {
    onDeleteAGuidePhone(filter: $filter) {
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
export const onCreateAColor = /* GraphQL */ `
  subscription OnCreateAColor($filter: ModelSubscriptionAColorFilterInput) {
    onCreateAColor(filter: $filter) {
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
export const onUpdateAColor = /* GraphQL */ `
  subscription OnUpdateAColor($filter: ModelSubscriptionAColorFilterInput) {
    onUpdateAColor(filter: $filter) {
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
export const onDeleteAColor = /* GraphQL */ `
  subscription OnDeleteAColor($filter: ModelSubscriptionAColorFilterInput) {
    onDeleteAColor(filter: $filter) {
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
export const onCreateAStorage = /* GraphQL */ `
  subscription OnCreateAStorage($filter: ModelSubscriptionAStorageFilterInput) {
    onCreateAStorage(filter: $filter) {
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
export const onUpdateAStorage = /* GraphQL */ `
  subscription OnUpdateAStorage($filter: ModelSubscriptionAStorageFilterInput) {
    onUpdateAStorage(filter: $filter) {
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
export const onDeleteAStorage = /* GraphQL */ `
  subscription OnDeleteAStorage($filter: ModelSubscriptionAStorageFilterInput) {
    onDeleteAStorage(filter: $filter) {
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
export const onCreateAOpSystem = /* GraphQL */ `
  subscription OnCreateAOpSystem(
    $filter: ModelSubscriptionAOpSystemFilterInput
  ) {
    onCreateAOpSystem(filter: $filter) {
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
export const onUpdateAOpSystem = /* GraphQL */ `
  subscription OnUpdateAOpSystem(
    $filter: ModelSubscriptionAOpSystemFilterInput
  ) {
    onUpdateAOpSystem(filter: $filter) {
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
export const onDeleteAOpSystem = /* GraphQL */ `
  subscription OnDeleteAOpSystem(
    $filter: ModelSubscriptionAOpSystemFilterInput
  ) {
    onDeleteAOpSystem(filter: $filter) {
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
export const onCreateACountriesLanguages = /* GraphQL */ `
  subscription OnCreateACountriesLanguages(
    $filter: ModelSubscriptionACountriesLanguagesFilterInput
  ) {
    onCreateACountriesLanguages(filter: $filter) {
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
export const onUpdateACountriesLanguages = /* GraphQL */ `
  subscription OnUpdateACountriesLanguages(
    $filter: ModelSubscriptionACountriesLanguagesFilterInput
  ) {
    onUpdateACountriesLanguages(filter: $filter) {
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
export const onDeleteACountriesLanguages = /* GraphQL */ `
  subscription OnDeleteACountriesLanguages(
    $filter: ModelSubscriptionACountriesLanguagesFilterInput
  ) {
    onDeleteACountriesLanguages(filter: $filter) {
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
export const onCreateACountriesCurrencies = /* GraphQL */ `
  subscription OnCreateACountriesCurrencies(
    $filter: ModelSubscriptionACountriesCurrenciesFilterInput
  ) {
    onCreateACountriesCurrencies(filter: $filter) {
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
export const onUpdateACountriesCurrencies = /* GraphQL */ `
  subscription OnUpdateACountriesCurrencies(
    $filter: ModelSubscriptionACountriesCurrenciesFilterInput
  ) {
    onUpdateACountriesCurrencies(filter: $filter) {
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
export const onDeleteACountriesCurrencies = /* GraphQL */ `
  subscription OnDeleteACountriesCurrencies(
    $filter: ModelSubscriptionACountriesCurrenciesFilterInput
  ) {
    onDeleteACountriesCurrencies(filter: $filter) {
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
export const onCreateAGuidePhonesColors = /* GraphQL */ `
  subscription OnCreateAGuidePhonesColors(
    $filter: ModelSubscriptionAGuidePhonesColorsFilterInput
  ) {
    onCreateAGuidePhonesColors(filter: $filter) {
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
export const onUpdateAGuidePhonesColors = /* GraphQL */ `
  subscription OnUpdateAGuidePhonesColors(
    $filter: ModelSubscriptionAGuidePhonesColorsFilterInput
  ) {
    onUpdateAGuidePhonesColors(filter: $filter) {
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
export const onDeleteAGuidePhonesColors = /* GraphQL */ `
  subscription OnDeleteAGuidePhonesColors(
    $filter: ModelSubscriptionAGuidePhonesColorsFilterInput
  ) {
    onDeleteAGuidePhonesColors(filter: $filter) {
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
export const onCreateAGuidePhonesStorages = /* GraphQL */ `
  subscription OnCreateAGuidePhonesStorages(
    $filter: ModelSubscriptionAGuidePhonesStoragesFilterInput
  ) {
    onCreateAGuidePhonesStorages(filter: $filter) {
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
export const onUpdateAGuidePhonesStorages = /* GraphQL */ `
  subscription OnUpdateAGuidePhonesStorages(
    $filter: ModelSubscriptionAGuidePhonesStoragesFilterInput
  ) {
    onUpdateAGuidePhonesStorages(filter: $filter) {
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
export const onDeleteAGuidePhonesStorages = /* GraphQL */ `
  subscription OnDeleteAGuidePhonesStorages(
    $filter: ModelSubscriptionAGuidePhonesStoragesFilterInput
  ) {
    onDeleteAGuidePhonesStorages(filter: $filter) {
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
