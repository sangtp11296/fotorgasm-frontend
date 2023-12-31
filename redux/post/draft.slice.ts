import { DraftPost } from "@/types/Posts.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: DraftPost = {
    submit: false,
    _id: '',
    format: '',
    title: '',
    slug: '',
    author: '',
    category: '',
    desc: '',
    tags: [],
    coverThumbnail: '',
    coverUrl: '',
    coverKey: '',
    content: '',
    coverRes: {
        width: 0,
        height: 0
    },
    createdAt: '', // Add createdAt
    views: '',     // Add views
    likes: '',     // Add likes
    comments: [],
    status: 'draft'
}

const draftSlice = createSlice({
    name: 'draft',
    initialState: initialState,
    reducers: {
        updateTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        updateFormat: (state, action: PayloadAction<string>) => {
            state.format = action.payload
        },
        updateSlug: (state, action: PayloadAction<string>) => {
            state.slug = action.payload
        },
        updateAuthor: (state, action: PayloadAction<string>) => {
            state.author = action.payload
        },
        updateCat: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        updateDesc: (state, action: PayloadAction<string>) => {
            state.desc = action.payload
        },
        updateTag: (state, action: PayloadAction<string[]>) => {
            state.tags = action.payload
        },
        updateCoverThumbnail: (state, action: PayloadAction<string>) => {
            state.coverThumbnail = action.payload
        },
        updateCoverUrl: (state, action: PayloadAction<string>) => {
            state.coverUrl = action.payload
        },
        updateCoverKey: (state, action: PayloadAction<string>) => {
            state.coverKey = action.payload
        },
        updateCoverRes: (state, action: PayloadAction<{width: number, height: number}>) => {
            state.coverRes = action.payload
        },
        updateContent: (state, action: PayloadAction<string>) => {
            state.content = action.payload
        },
        updateStatus: (state, action: PayloadAction<string>) => {
            state.status = action.payload
        },
        updateId: (state, action: PayloadAction<string>) => {
            state._id = action.payload
        },
        clearDraft: () => initialState,
        submitDraft: (state, action: PayloadAction<boolean>) => {
            state.submit = action.payload
        }
    }
})

export const { updateId, updateTitle, updateFormat, updateSlug, updateAuthor, updateCat, updateDesc, updateTag, updateCoverThumbnail, updateCoverUrl, updateCoverKey, updateCoverRes, updateContent, updateStatus, clearDraft, submitDraft } = draftSlice.actions;
const draftReducer = draftSlice.reducer;

export default draftReducer;