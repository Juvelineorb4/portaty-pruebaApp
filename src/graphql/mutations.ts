/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createAImageCarousel = /* GraphQL */ `
  mutation CreateAImageCarousel(
    $input: CreateAImageCarouselInput!
    $condition: ModelAImageCarouselConditionInput
  ) {
    createAImageCarousel(input: $input, condition: $condition) {
      id
      image
      description
      route
      createdAt
      updatedAt
    }
  }
`;
export const updateAImageCarousel = /* GraphQL */ `
  mutation UpdateAImageCarousel(
    $input: UpdateAImageCarouselInput!
    $condition: ModelAImageCarouselConditionInput
  ) {
    updateAImageCarousel(input: $input, condition: $condition) {
      id
      image
      description
      route
      createdAt
      updatedAt
    }
  }
`;
export const deleteAImageCarousel = /* GraphQL */ `
  mutation DeleteAImageCarousel(
    $input: DeleteAImageCarouselInput!
    $condition: ModelAImageCarouselConditionInput
  ) {
    deleteAImageCarousel(input: $input, condition: $condition) {
      id
      image
      description
      route
      createdAt
      updatedAt
    }
  }
`;
export const createABrand = /* GraphQL */ `
  mutation CreateABrand(
    $input: CreateABrandInput!
    $condition: ModelABrandConditionInput
  ) {
    createABrand(input: $input, condition: $condition) {
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
export const updateABrand = /* GraphQL */ `
  mutation UpdateABrand(
    $input: UpdateABrandInput!
    $condition: ModelABrandConditionInput
  ) {
    updateABrand(input: $input, condition: $condition) {
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
export const deleteABrand = /* GraphQL */ `
  mutation DeleteABrand(
    $input: DeleteABrandInput!
    $condition: ModelABrandConditionInput
  ) {
    deleteABrand(input: $input, condition: $condition) {
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
export const createAProductType = /* GraphQL */ `
  mutation CreateAProductType(
    $input: CreateAProductTypeInput!
    $condition: ModelAProductTypeConditionInput
  ) {
    createAProductType(input: $input, condition: $condition) {
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
export const updateAProductType = /* GraphQL */ `
  mutation UpdateAProductType(
    $input: UpdateAProductTypeInput!
    $condition: ModelAProductTypeConditionInput
  ) {
    updateAProductType(input: $input, condition: $condition) {
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
export const deleteAProductType = /* GraphQL */ `
  mutation DeleteAProductType(
    $input: DeleteAProductTypeInput!
    $condition: ModelAProductTypeConditionInput
  ) {
    deleteAProductType(input: $input, condition: $condition) {
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
export const createAPhone = /* GraphQL */ `
  mutation CreateAPhone(
    $input: CreateAPhoneInput!
    $condition: ModelAPhoneConditionInput
  ) {
    createAPhone(input: $input, condition: $condition) {
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
export const updateAPhone = /* GraphQL */ `
  mutation UpdateAPhone(
    $input: UpdateAPhoneInput!
    $condition: ModelAPhoneConditionInput
  ) {
    updateAPhone(input: $input, condition: $condition) {
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
export const deleteAPhone = /* GraphQL */ `
  mutation DeleteAPhone(
    $input: DeleteAPhoneInput!
    $condition: ModelAPhoneConditionInput
  ) {
    deleteAPhone(input: $input, condition: $condition) {
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
export const createACarrier = /* GraphQL */ `
  mutation CreateACarrier(
    $input: CreateACarrierInput!
    $condition: ModelACarrierConditionInput
  ) {
    createACarrier(input: $input, condition: $condition) {
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
export const updateACarrier = /* GraphQL */ `
  mutation UpdateACarrier(
    $input: UpdateACarrierInput!
    $condition: ModelACarrierConditionInput
  ) {
    updateACarrier(input: $input, condition: $condition) {
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
export const deleteACarrier = /* GraphQL */ `
  mutation DeleteACarrier(
    $input: DeleteACarrierInput!
    $condition: ModelACarrierConditionInput
  ) {
    deleteACarrier(input: $input, condition: $condition) {
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
export const createACountry = /* GraphQL */ `
  mutation CreateACountry(
    $input: CreateACountryInput!
    $condition: ModelACountryConditionInput
  ) {
    createACountry(input: $input, condition: $condition) {
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
export const updateACountry = /* GraphQL */ `
  mutation UpdateACountry(
    $input: UpdateACountryInput!
    $condition: ModelACountryConditionInput
  ) {
    updateACountry(input: $input, condition: $condition) {
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
export const deleteACountry = /* GraphQL */ `
  mutation DeleteACountry(
    $input: DeleteACountryInput!
    $condition: ModelACountryConditionInput
  ) {
    deleteACountry(input: $input, condition: $condition) {
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
export const createALanguage = /* GraphQL */ `
  mutation CreateALanguage(
    $input: CreateALanguageInput!
    $condition: ModelALanguageConditionInput
  ) {
    createALanguage(input: $input, condition: $condition) {
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
export const updateALanguage = /* GraphQL */ `
  mutation UpdateALanguage(
    $input: UpdateALanguageInput!
    $condition: ModelALanguageConditionInput
  ) {
    updateALanguage(input: $input, condition: $condition) {
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
export const deleteALanguage = /* GraphQL */ `
  mutation DeleteALanguage(
    $input: DeleteALanguageInput!
    $condition: ModelALanguageConditionInput
  ) {
    deleteALanguage(input: $input, condition: $condition) {
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
export const createACurrencie = /* GraphQL */ `
  mutation CreateACurrencie(
    $input: CreateACurrencieInput!
    $condition: ModelACurrencieConditionInput
  ) {
    createACurrencie(input: $input, condition: $condition) {
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
export const updateACurrencie = /* GraphQL */ `
  mutation UpdateACurrencie(
    $input: UpdateACurrencieInput!
    $condition: ModelACurrencieConditionInput
  ) {
    updateACurrencie(input: $input, condition: $condition) {
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
export const deleteACurrencie = /* GraphQL */ `
  mutation DeleteACurrencie(
    $input: DeleteACurrencieInput!
    $condition: ModelACurrencieConditionInput
  ) {
    deleteACurrencie(input: $input, condition: $condition) {
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
export const createAGuidePhone = /* GraphQL */ `
  mutation CreateAGuidePhone(
    $input: CreateAGuidePhoneInput!
    $condition: ModelAGuidePhoneConditionInput
  ) {
    createAGuidePhone(input: $input, condition: $condition) {
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
export const updateAGuidePhone = /* GraphQL */ `
  mutation UpdateAGuidePhone(
    $input: UpdateAGuidePhoneInput!
    $condition: ModelAGuidePhoneConditionInput
  ) {
    updateAGuidePhone(input: $input, condition: $condition) {
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
export const deleteAGuidePhone = /* GraphQL */ `
  mutation DeleteAGuidePhone(
    $input: DeleteAGuidePhoneInput!
    $condition: ModelAGuidePhoneConditionInput
  ) {
    deleteAGuidePhone(input: $input, condition: $condition) {
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
export const createAColor = /* GraphQL */ `
  mutation CreateAColor(
    $input: CreateAColorInput!
    $condition: ModelAColorConditionInput
  ) {
    createAColor(input: $input, condition: $condition) {
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
export const updateAColor = /* GraphQL */ `
  mutation UpdateAColor(
    $input: UpdateAColorInput!
    $condition: ModelAColorConditionInput
  ) {
    updateAColor(input: $input, condition: $condition) {
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
export const deleteAColor = /* GraphQL */ `
  mutation DeleteAColor(
    $input: DeleteAColorInput!
    $condition: ModelAColorConditionInput
  ) {
    deleteAColor(input: $input, condition: $condition) {
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
export const createAStorage = /* GraphQL */ `
  mutation CreateAStorage(
    $input: CreateAStorageInput!
    $condition: ModelAStorageConditionInput
  ) {
    createAStorage(input: $input, condition: $condition) {
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
export const updateAStorage = /* GraphQL */ `
  mutation UpdateAStorage(
    $input: UpdateAStorageInput!
    $condition: ModelAStorageConditionInput
  ) {
    updateAStorage(input: $input, condition: $condition) {
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
export const deleteAStorage = /* GraphQL */ `
  mutation DeleteAStorage(
    $input: DeleteAStorageInput!
    $condition: ModelAStorageConditionInput
  ) {
    deleteAStorage(input: $input, condition: $condition) {
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
export const createAOpSystem = /* GraphQL */ `
  mutation CreateAOpSystem(
    $input: CreateAOpSystemInput!
    $condition: ModelAOpSystemConditionInput
  ) {
    createAOpSystem(input: $input, condition: $condition) {
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
export const updateAOpSystem = /* GraphQL */ `
  mutation UpdateAOpSystem(
    $input: UpdateAOpSystemInput!
    $condition: ModelAOpSystemConditionInput
  ) {
    updateAOpSystem(input: $input, condition: $condition) {
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
export const deleteAOpSystem = /* GraphQL */ `
  mutation DeleteAOpSystem(
    $input: DeleteAOpSystemInput!
    $condition: ModelAOpSystemConditionInput
  ) {
    deleteAOpSystem(input: $input, condition: $condition) {
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
export const createACountriesLanguages = /* GraphQL */ `
  mutation CreateACountriesLanguages(
    $input: CreateACountriesLanguagesInput!
    $condition: ModelACountriesLanguagesConditionInput
  ) {
    createACountriesLanguages(input: $input, condition: $condition) {
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
export const updateACountriesLanguages = /* GraphQL */ `
  mutation UpdateACountriesLanguages(
    $input: UpdateACountriesLanguagesInput!
    $condition: ModelACountriesLanguagesConditionInput
  ) {
    updateACountriesLanguages(input: $input, condition: $condition) {
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
export const deleteACountriesLanguages = /* GraphQL */ `
  mutation DeleteACountriesLanguages(
    $input: DeleteACountriesLanguagesInput!
    $condition: ModelACountriesLanguagesConditionInput
  ) {
    deleteACountriesLanguages(input: $input, condition: $condition) {
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
export const createACountriesCurrencies = /* GraphQL */ `
  mutation CreateACountriesCurrencies(
    $input: CreateACountriesCurrenciesInput!
    $condition: ModelACountriesCurrenciesConditionInput
  ) {
    createACountriesCurrencies(input: $input, condition: $condition) {
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
export const updateACountriesCurrencies = /* GraphQL */ `
  mutation UpdateACountriesCurrencies(
    $input: UpdateACountriesCurrenciesInput!
    $condition: ModelACountriesCurrenciesConditionInput
  ) {
    updateACountriesCurrencies(input: $input, condition: $condition) {
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
export const deleteACountriesCurrencies = /* GraphQL */ `
  mutation DeleteACountriesCurrencies(
    $input: DeleteACountriesCurrenciesInput!
    $condition: ModelACountriesCurrenciesConditionInput
  ) {
    deleteACountriesCurrencies(input: $input, condition: $condition) {
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
export const createAGuidePhonesColors = /* GraphQL */ `
  mutation CreateAGuidePhonesColors(
    $input: CreateAGuidePhonesColorsInput!
    $condition: ModelAGuidePhonesColorsConditionInput
  ) {
    createAGuidePhonesColors(input: $input, condition: $condition) {
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
export const updateAGuidePhonesColors = /* GraphQL */ `
  mutation UpdateAGuidePhonesColors(
    $input: UpdateAGuidePhonesColorsInput!
    $condition: ModelAGuidePhonesColorsConditionInput
  ) {
    updateAGuidePhonesColors(input: $input, condition: $condition) {
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
export const deleteAGuidePhonesColors = /* GraphQL */ `
  mutation DeleteAGuidePhonesColors(
    $input: DeleteAGuidePhonesColorsInput!
    $condition: ModelAGuidePhonesColorsConditionInput
  ) {
    deleteAGuidePhonesColors(input: $input, condition: $condition) {
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
export const createAGuidePhonesStorages = /* GraphQL */ `
  mutation CreateAGuidePhonesStorages(
    $input: CreateAGuidePhonesStoragesInput!
    $condition: ModelAGuidePhonesStoragesConditionInput
  ) {
    createAGuidePhonesStorages(input: $input, condition: $condition) {
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
export const updateAGuidePhonesStorages = /* GraphQL */ `
  mutation UpdateAGuidePhonesStorages(
    $input: UpdateAGuidePhonesStoragesInput!
    $condition: ModelAGuidePhonesStoragesConditionInput
  ) {
    updateAGuidePhonesStorages(input: $input, condition: $condition) {
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
export const deleteAGuidePhonesStorages = /* GraphQL */ `
  mutation DeleteAGuidePhonesStorages(
    $input: DeleteAGuidePhonesStoragesInput!
    $condition: ModelAGuidePhonesStoragesConditionInput
  ) {
    deleteAGuidePhonesStorages(input: $input, condition: $condition) {
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
