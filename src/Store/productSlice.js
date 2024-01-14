import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status:'idle'
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action) { 
      state.data = action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(getProducts.pending ,(state ,action) =>{
        state.status = "Loading";
      
    })
    .addCase(getProducts.fulfilled ,(state ,action) =>{
        state.data = action.payload;
        state.status = "idle"
    })
    .addCase(getProducts.rejected ,(state ,action) =>{
        state.status = "Error";
    })

  }
});
export const { fetchProducts } = cartSlice.actions;
export default cartSlice.reducer;

export const getProducts = createAsyncThunk('products/get' ,async()=>{
    const response= await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
})

// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     try{
//     const response= await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     dispatch(fetchProducts(data));}catch(error){
//         console.log("Error Fetching",error)
//     }
//   };
// }
