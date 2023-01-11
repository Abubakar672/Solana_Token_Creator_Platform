"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 1593:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ CreateToken)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1057);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__, _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);







const CreateToken = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const { publicKey , sendTransaction  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { 0: tokenName , 1: setTokenName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: symbol , 1: setSymbol  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: metadata , 1: setMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: amount , 1: setAmount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: decimals , 1: setDecimals  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (form)=>{
        const lamports = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.getMinimumBalanceForRentExemptMint)(connection);
        const mintKeypair = _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Keypair.generate();
        const metadataPDA = await (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_6__.findMetadataPda)(mintKeypair.publicKey);
        const tokenATA = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.getAssociatedTokenAddress)(mintKeypair.publicKey, publicKey);
        const tokenMetadata = {
            name: form.tokenName,
            symbol: form.symbol,
            uri: form.metadata,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null
        };
        const createNewTokenTransaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.SystemProgram.createAccount({
            fromPubkey: publicKey,
            newAccountPubkey: mintKeypair.publicKey,
            space: _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.MINT_SIZE,
            lamports: lamports,
            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.TOKEN_PROGRAM_ID
        }), (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.createInitializeMintInstruction)(mintKeypair.publicKey, form.decimals, publicKey, publicKey, _solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.TOKEN_PROGRAM_ID), (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.createAssociatedTokenAccountInstruction)(publicKey, tokenATA, publicKey, mintKeypair.publicKey), (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_4__.createMintToInstruction)(mintKeypair.publicKey, tokenATA, publicKey, form.amount * Math.pow(10, form.decimals)), (0,_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_5__.createCreateMetadataAccountV2Instruction)({
            metadata: metadataPDA,
            mint: mintKeypair.publicKey,
            mintAuthority: publicKey,
            payer: publicKey,
            updateAuthority: publicKey
        }, {
            createMetadataAccountArgsV2: {
                data: tokenMetadata,
                isMutable: true
            }
        }));
        await sendTransaction(createNewTokenTransaction, connection, {
            signers: [
                mintKeypair
            ]
        });
    }, [
        publicKey,
        connection,
        sendTransaction
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Token Name",
                onChange: (e)=>setTokenName(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Symbol",
                onChange: (e)=>setSymbol(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Metadata Url",
                onChange: (e)=>setMetadata(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "number",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Amount",
                onChange: (e)=>setAmount(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "number",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Decimals",
                onChange: (e)=>setDecimals(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
                onClick: ()=>onClick({
                        decimals: Number(decimals),
                        amount: Number(amount),
                        metadata: metadata,
                        symbol: symbol,
                        tokenName: tokenName
                    })
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Create Token"
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 7924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GetMetadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const GetMetadata = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const { 0: tokenAddress , 1: setTokenAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: tokenMetadata , 1: setTokenMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: logo , 1: setLogo  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const getMetadata = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (form)=>{
        const tokenMint = form.tokenAddress;
        const metadataPDA = await (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__.findMetadataPda)(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(tokenMint));
        console.log(metadataPDA.toBase58());
        const metadataAccount = await connection.getAccountInfo(metadataPDA);
        console.log(metadataAccount);
        const [metadata, _] = await _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4__.Metadata.deserialize(metadataAccount.data);
        console.log(metadata);
        let logoRes = await fetch(metadata.data.uri);
        let logoJson = await logoRes.json();
        let { image  } = logoJson;
        setTokenMetadata({
            tokenMetadata,
            ...metadata.data
        });
        setLogo(image);
        setLoaded(true);
        setTokenAddress('');
    }, [
        tokenAddress
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        value: tokenAddress,
                        className: "form-control block mb-2 ml-auto mr-auto max-w-800 px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                        placeholder: "Token Address",
                        onChange: (e)=>setTokenAddress(e.target.value)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
                        onClick: ()=>getMetadata({
                                tokenAddress
                            })
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Get Metadata"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-6",
                children: !loaded ? undefined : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white shadow overflow-hidden sm:rounded-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "px-4 py-5 sm:px-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-lg leading-6 font-medium text-gray-900",
                                children: "Token Metadata"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-gray-200",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                                className: "divide-y divide-gray-200",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "logo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: logo,
                                                        alt: "token",
                                                        className: "w-1/4 h-full inline-block object-center object-cover lg:w-1/4 lg:h-full"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "name"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                    children: tokenMetadata.name
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "symbol"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                    children: tokenMetadata.symbol || 'undefined'
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                                    className: "text-sm font-medium text-gray-500",
                                                    children: "uri"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                                    className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: tokenMetadata.uri,
                                                        target: "_blank",
                                                        children: tokenMetadata.uri
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 9950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ RequestAirdrop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6654);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const RequestAirdrop = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const { getUserSOLBalance  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!publicKey) {
            console.log('error', 'Wallet not connected!');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: 'error',
                description: 'Wallet not connected!'
            });
            return;
        }
        let signature = '';
        try {
            signature = await connection.requestAirdrop(publicKey, _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL);
            await connection.confirmTransaction(signature, 'confirmed');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'success',
                message: 'Airdrop successful!',
                txid: signature
            });
            getUserSOLBalance(publicKey, connection);
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: `Airdrop failed!`,
                description: error?.message,
                txid: signature
            });
            console.log('error', `Airdrop failed! ${error?.message}`, signature);
        }
    }, [
        publicKey,
        connection,
        getUserSOLBalance
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Airdrop 1 "
            })
        })
    }));
};

});

/***/ }),

/***/ 3535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ SendTransaction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const SendTransaction = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const { publicKey , sendTransaction  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!publicKey) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: `Wallet not connected!`
            });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }
        let signature = '';
        try {
            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Keypair.generate().publicKey,
                lamports: 1
            }));
            signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'success',
                message: 'Transaction successful!',
                txid: signature
            });
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: `Transaction failed!`,
                description: error?.message,
                txid: signature
            });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [
        publicKey,
        _utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h,
        connection,
        sendTransaction
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... ",
            onClick: onClick,
            disabled: !publicKey,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden group-disabled:block ",
                    children: "Wallet not connected"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block group-disabled:hidden",
                    children: "Send Transaction"
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 1701:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SignMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(390);
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bs58__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1707);
/* harmony import */ var tweetnacl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tweetnacl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// TODO: SignMessage





const SignMessage = ()=>{
    const { publicKey , signMessage  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        try {
            // `publicKey` will be null if the wallet isn't connected
            if (!publicKey) throw new Error('Wallet not connected!');
            // `signMessage` will be undefined if the wallet doesn't support it
            if (!signMessage) throw new Error('Wallet does not support message signing!');
            // Encode anything as bytes
            const message = new TextEncoder().encode('Hello, world!');
            // Sign the bytes using the wallet
            const signature = await signMessage(message);
            // Verify that the bytes were signed using the private key that matches the known public key
            if (!tweetnacl__WEBPACK_IMPORTED_MODULE_4__.sign.detached.verify(message, signature, publicKey.toBytes())) throw new Error('Invalid signature!');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
                type: 'success',
                message: 'Sign message successful!',
                txid: bs58__WEBPACK_IMPORTED_MODULE_2___default().encode(signature)
            });
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h)({
                type: 'error',
                message: `Sign Message failed!`,
                description: error?.message
            });
            console.log('error', `Sign Message failed! ${error?.message}`);
        }
    }, [
        publicKey,
        _utils_notifications__WEBPACK_IMPORTED_MODULE_5__/* .notify */ .h,
        signMessage
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... ",
            onClick: onClick,
            disabled: !publicKey,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden group-disabled:block",
                    children: "Wallet not connected"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block group-disabled:hidden",
                    children: "Sign Message"
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 2679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UpdateMetadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9817);
/* harmony import */ var _metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1644);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const UpdateMetadata = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const { publicKey , sendTransaction  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { 0: tokenMint , 1: setTokenMint  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: tokenName , 1: setTokenName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: symbol , 1: setSymbol  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: metadata , 1: setMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (form)=>{
        const mint = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(form.tokenMint);
        console.log(mint.toString());
        console.log(form.tokenMint);
        const metadataPDA = await (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_5__.findMetadataPda)(mint);
        const tokenMetadata = {
            name: form.tokenName,
            symbol: form.symbol,
            uri: form.metadata,
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null
        };
        const updateMetadataTransaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Transaction().add((0,_metaplex_foundation_mpl_token_metadata__WEBPACK_IMPORTED_MODULE_4__.createUpdateMetadataAccountV2Instruction)({
            metadata: metadataPDA,
            updateAuthority: publicKey
        }, {
            updateMetadataAccountArgsV2: {
                data: tokenMetadata,
                updateAuthority: publicKey,
                primarySaleHappened: true,
                isMutable: true
            }
        }));
        await sendTransaction(updateMetadataTransaction, connection);
    }, [
        publicKey,
        connection,
        sendTransaction
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Token Mint Address",
                onChange: (e)=>setTokenMint(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Token Name",
                onChange: (e)=>setTokenName(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Symbol",
                onChange: (e)=>setSymbol(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                className: "form-control block mb-2 w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
                placeholder: "Metadata Url",
                onChange: (e)=>setMetadata(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
                onClick: ()=>onClick({
                        metadata: metadata,
                        symbol: symbol,
                        tokenName: tokenName,
                        tokenMint: tokenMint
                    })
                ,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Update Metadata"
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UploadMetadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bundlr_network_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(238);
/* harmony import */ var _bundlr_network_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_bundlr_network_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1247);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6654);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _utils_notifications__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _utils_notifications__WEBPACK_IMPORTED_MODULE_7__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const bundlers = [
    {
        id: 1,
        network: 'mainnet-beta',
        name: 'https://node1.bundlr.network'
    },
    {
        id: 2,
        network: 'devnet',
        name: 'https://devnet.bundlr.network'
    }, 
];
const classNames = (...classes)=>{
    return classes.filter(Boolean).join(' ');
};
const UploadMetadata = ({})=>{
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useWallet)();
    const { 0: provider1 , 1: setProvider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: bundlr , 1: setBundlr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selected1 , 1: setSelected  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedImage , 1: setSelectedImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: imageFile , 1: setImageFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: imageUrl , 1: setImageUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedFile , 1: setSelectedFile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: metadata , 1: setMetadata  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: metadataUrl , 1: setMetadataUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (wallet && wallet.connected) {
            async function connectProvider() {
                console.log(wallet);
                await wallet.connect();
                const provider = wallet.wallet.adapter;
                await provider.connect();
                setProvider(provider);
            }
            connectProvider();
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});
    const initializeBundlr = async ()=>{
        // initialise a bundlr client
        let bundler;
        if (selected1.name === 'https://devnet.bundlr.network') {
            bundler = new _bundlr_network_client__WEBPACK_IMPORTED_MODULE_4__.WebBundlr(`${selected1.name}`, 'solana', provider1, {
                providerUrl: 'https://api.devnet.solana.com'
            });
        } else {
            bundler = new _bundlr_network_client__WEBPACK_IMPORTED_MODULE_4__.WebBundlr(`${selected1.name}`, 'solana', provider1);
        }
        console.log(bundler);
        try {
            // Check for valid bundlr node
            await bundler.utils.getBundlerAddress('solana');
        } catch (err) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_7__/* .notify */ .h)({
                type: 'error',
                message: `${err}`
            });
            return;
        }
        try {
            await bundler.ready();
        } catch (err1) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_7__/* .notify */ .h)({
                type: 'error',
                message: `${err1}`
            });
            return;
        } //@ts-ignore
        if (!bundler.address) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_7__/* .notify */ .h)({
                type: 'error',
                message: 'Unexpected error: bundlr address not found'
            });
        }
        (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_7__/* .notify */ .h)({
            type: 'success',
            message: `Connected to ${selected1.network}`
        });
        setAddress(bundler?.address);
        setBundlr(bundler);
    };
    const handleImageChange = (event)=>{
        const file = event.target.files[0];
        let reader = new FileReader();
        if (file) {
            setSelectedImage(file.name);
            reader.onload = function() {
                if (reader.result) {
                    setImageFile(Buffer.from(reader.result));
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };
    const handleMetadataChange = (event)=>{
        const file = event.target.files[0];
        let reader = new FileReader();
        if (file) {
            setSelectedFile(file.name);
            reader.onload = function() {
                if (reader.result) {
                    setMetadata(Buffer.from(reader.result));
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };
    const uploadImage = async ()=>{
        const price = await bundlr.utils.getPrice('solana', imageFile.length);
        let amount = bundlr.utils.unitConverter(price);
        amount = amount.toNumber();
        const loadedBalance = await bundlr.getLoadedBalance();
        let balance = bundlr.utils.unitConverter(loadedBalance.toNumber());
        balance = balance.toNumber();
        if (balance < amount) {
            await bundlr.fund(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.LAMPORTS_PER_SOL);
        }
        const imageResult = await bundlr.uploader.upload(imageFile, [
            {
                name: 'Content-Type',
                value: 'image/png'
            }, 
        ]);
        const arweaveImageUrl = `https://arweave.net/${imageResult.data.id}?ext=png`;
        if (arweaveImageUrl) {
            setImageUrl(arweaveImageUrl);
        }
    };
    const uploadMetadata = async ()=>{
        const price = await bundlr.utils.getPrice('solana', metadata.length);
        let amount = bundlr.utils.unitConverter(price);
        amount = amount.toNumber();
        const loadedBalance = await bundlr.getLoadedBalance();
        let balance = bundlr.utils.unitConverter(loadedBalance.toNumber());
        balance = balance.toNumber();
        if (balance < amount) {
            await bundlr.fund(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.LAMPORTS_PER_SOL);
        }
        const metadataResult = await bundlr.uploader.upload(metadata, [
            {
                name: 'Content-Type',
                value: 'application/json'
            }, 
        ]);
        const arweaveMetadataUrl = `https://arweave.net/${metadataResult.data.id}`;
        setMetadataUrl(arweaveMetadataUrl);
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white shadow overflow-hidden sm:rounded-lg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "border-t border-gray-200 px-4 py-5 sm:p-0",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:col-span-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-4 sm:px-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-lg font-medium leading-6 text-gray-900",
                                        children: "Bundler"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-1 text-sm text-gray-600",
                                        children: "This is the bundler you will be using to upload your files to Arweave."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
                                    value: selected1,
                                    onChange: setSelected,
                                    children: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-1 relative",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                                                        className: "bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "block truncate",
                                                                children: !selected1 ? 'Select Network' : selected1.network
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.SelectorIcon, {
                                                                    className: "h-5 w-5 text-gray-400",
                                                                    "aria-hidden": "true"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                        leave: "transition ease-in duration-100",
                                                        leaveFrom: "opacity-100",
                                                        leaveTo: "opacity-0",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                                                            className: "absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm",
                                                            children: bundlers.map((bundler)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                                                                    className: ({ active  })=>classNames(active ? 'text-white bg-purple-500' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9')
                                                                    ,
                                                                    value: bundler,
                                                                    children: ({ selected , active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate'),
                                                                                    children: bundler.network
                                                                                }),
                                                                                selected ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: classNames(active ? 'text-white' : 'text-purple-500', 'absolute inset-y-0 right-0 flex items-center pr-4'),
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.CheckIcon, {
                                                                                        className: "h-5 w-5",
                                                                                        "aria-hidden": "true"
                                                                                    })
                                                                                }) : null
                                                                            ]
                                                                        })
                                                                }, bundler.id)
                                                            )
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "items-center px-3 py-2 text-xs btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
                                    onClick: async ()=>await initializeBundlr()
                                    ,
                                    children: "Connect"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden sm:block",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-gray-200"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:col-span-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-4 sm:px-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-lg font-medium leading-6 text-gray-900",
                                        children: "Image URL"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "mt-1 text-sm text-gray-600",
                                        children: [
                                            "The Arweave URL for your stored image. Set this as the",
                                            ' ',
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                className: "text-purple-500 bg-purple-100",
                                                children: "image"
                                            }),
                                            " and",
                                            ' ',
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                className: "text-purple-500 bg-purple-100",
                                                children: "uri"
                                            }),
                                            " values in your metadata file."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",
                            children: !imageUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-1 sm:mt-0 sm:col-span-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-1 text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "mx-auto h-12 w-12 text-gray-400",
                                                stroke: "currentColor",
                                                fill: "none",
                                                viewBox: "0 0 48 48",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                                    strokeWidth: 2,
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex text-sm text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "image-upload",
                                                        className: "relative cursor-pointer bg-white rounded-md font-medium text-purple-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Upload an image"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "image-upload",
                                                                name: "image-upload",
                                                                type: "file",
                                                                className: "sr-only",
                                                                onChange: handleImageChange
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "pl-1",
                                                        children: "or drag and drop"
                                                    })
                                                ]
                                            }),
                                            !selectedImage ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-500",
                                                children: selectedImage
                                            })
                                        ]
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: imageUrl,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: imageUrl
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                                children: !imageUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
                                    onClick: async ()=>uploadImage()
                                    ,
                                    disabled: !bundlr,
                                    children: "Upload Image"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden sm:block",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-t border-gray-200"
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "md:col-span-1",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "px-4 sm:px-0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "text-lg font-medium leading-6 text-gray-900",
                                        children: "Metadata URL"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-1 text-sm text-gray-600",
                                        children: "The Arweave URL where your metadata is saved. You will use this to create your token."
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",
                            children: !metadataUrl ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-1 sm:mt-0 sm:col-span-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-1 text-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "mx-auto h-12 w-12 text-gray-400",
                                                stroke: "currentColor",
                                                fill: "none",
                                                viewBox: "0 0 48 48",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
                                                    strokeWidth: 2,
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex text-sm text-gray-600",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "file-upload",
                                                        className: "relative cursor-pointer bg-white rounded-md font-medium text-purple-500 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Upload a file"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                id: "file-upload",
                                                                name: "file-upload",
                                                                type: "file",
                                                                className: "sr-only",
                                                                onChange: handleMetadataChange
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "pl-1",
                                                        children: "or drag and drop"
                                                    })
                                                ]
                                            }),
                                            !selectedFile ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-500",
                                                children: selectedFile
                                            })
                                        ]
                                    })
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: metadataUrl,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: metadataUrl
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 py-5 bg-white space-y-6 sm:p-6",
                                children: !metadataUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "items-center px-3 py-2 text-xs btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
                                    onClick: async ()=>uploadMetadata()
                                    ,
                                    disabled: !bundlr,
                                    children: "Upload Metadata"
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_0__]);
([immer__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


const useNotificationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get)=>({
        notifications: [],
        set: (fn)=>set((0,immer__WEBPACK_IMPORTED_MODULE_1__["default"])(fn))
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNotificationStore);

});

/***/ }),

/***/ 2405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const useUserSOLBalanceStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get)=>({
        balance: 0,
        getUserSOLBalance: async (publicKey, connection)=>{
            let balance = 0;
            try {
                balance = await connection.getBalance(publicKey, 'confirmed');
                balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL;
            } catch (e) {
                console.log(`error getting balance: `, e);
            }
            set((s)=>{
                s.balance = balance;
                console.log(`balance updated, `, balance);
            });
        }
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserSOLBalanceStore);

});

/***/ }),

/***/ 6654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ notify)
/* harmony export */ });
/* harmony import */ var _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__]);
_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

function notify(newNotification) {
    const { notifications , set: setNotificationStore ,  } = _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getState */ .Z.getState();
    setNotificationStore((state)=>{
        state.notifications = [
            ...notifications,
            {
                type: 'success',
                ...newNotification
            }, 
        ];
    });
}

});

/***/ }),

/***/ 917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BasicsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SignMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1701);
/* harmony import */ var _components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__, _components_SignMessage__WEBPACK_IMPORTED_MODULE_1__]);
([_components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__, _components_SignMessage__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const BasicsView = ({})=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: "Basics"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SignMessage__WEBPACK_IMPORTED_MODULE_1__/* .SignMessage */ .Q, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SendTransaction__WEBPACK_IMPORTED_MODULE_2__/* .SendTransaction */ .i, {})
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 6640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9950);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2405);
/* harmony import */ var components_CreateToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1593);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_CreateToken__WEBPACK_IMPORTED_MODULE_5__, _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([components_CreateToken__WEBPACK_IMPORTED_MODULE_5__, _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// Next, React

// Wallet

// Components

// Store


const HomeView = ({})=>{
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
    const balance = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)((s)=>s.balance
    );
    const { getUserSOLBalance  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (wallet.publicKey) {
            console.log(wallet.publicKey.toBase58());
            getUserSOLBalance(wallet.publicKey, connection);
        }
    }, [
        wallet.publicKey,
        connection,
        getUserSOLBalance
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: "Token Creator"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_3__/* .RequestAirdrop */ .E, {
                            "my-2": true
                        }),
                        wallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "SOL Balance: ",
                                (balance || 0).toLocaleString()
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CreateToken__WEBPACK_IMPORTED_MODULE_5__/* .CreateToken */ .j, {})
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ug": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "Lf": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   "P1": () => (/* reexport safe */ _uploader__WEBPACK_IMPORTED_MODULE_2__.P),
/* harmony export */   "WJ": () => (/* reexport safe */ _basics__WEBPACK_IMPORTED_MODULE_3__.W),
/* harmony export */   "XQ": () => (/* reexport safe */ _update__WEBPACK_IMPORTED_MODULE_4__.X)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6640);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9118);
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2596);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(917);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6165);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_update__WEBPACK_IMPORTED_MODULE_4__, _basics__WEBPACK_IMPORTED_MODULE_3__, _uploader__WEBPACK_IMPORTED_MODULE_2__, _metadata__WEBPACK_IMPORTED_MODULE_1__, _home__WEBPACK_IMPORTED_MODULE_0__]);
([_update__WEBPACK_IMPORTED_MODULE_4__, _basics__WEBPACK_IMPORTED_MODULE_3__, _uploader__WEBPACK_IMPORTED_MODULE_2__, _metadata__WEBPACK_IMPORTED_MODULE_1__, _home__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






});

/***/ }),

/***/ 9118:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ MetadataView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_GetMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_GetMetadata__WEBPACK_IMPORTED_MODULE_1__]);
components_GetMetadata__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const MetadataView = ({})=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: "Token Metadata"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_GetMetadata__WEBPACK_IMPORTED_MODULE_1__/* .GetMetadata */ .Z, {})
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 6165:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ UpdateView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UpdateMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2679);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_UpdateMetadata__WEBPACK_IMPORTED_MODULE_1__]);
components_UpdateMetadata__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const UpdateView = ({})=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: "Update Metadata"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UpdateMetadata__WEBPACK_IMPORTED_MODULE_1__/* .UpdateMetadata */ .Z, {})
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 2596:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ UploaderView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UploadMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_UploadMetadata__WEBPACK_IMPORTED_MODULE_1__]);
components_UploadMetadata__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const UploaderView = ({})=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: "Upload Metadata"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_UploadMetadata__WEBPACK_IMPORTED_MODULE_1__/* .UploadMetadata */ .Z, {})
                })
            ]
        })
    }));
};

});

/***/ })

};
;