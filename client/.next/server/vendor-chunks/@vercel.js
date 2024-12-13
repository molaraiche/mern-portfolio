"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* __next_internal_client_entry_do_not_use__ Analytics,track auto */ // src/react.tsx\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.4.1\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.va) return;\n    window.va = function a(...params) {\n        (window.vaq = window.vaq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n    if (mode === \"auto\") {\n        window.vam = detectEnvironment();\n        return;\n    }\n    window.vam = mode;\n}\nfunction getMode() {\n    const mode = isBrowser() ? window.vam : detectEnvironment();\n    return mode || \"production\";\n}\nfunction isProduction() {\n    return getMode() === \"production\";\n}\nfunction isDevelopment() {\n    return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n    return rest;\n}\nfunction parseProperties(properties, options) {\n    if (!properties) return void 0;\n    let props = properties;\n    const errorProperties = [];\n    for (const [key, value] of Object.entries(properties)){\n        if (typeof value === \"object\" && value !== null) {\n            if (options.strip) {\n                props = removeKey(key, props);\n            } else {\n                errorProperties.push(key);\n            }\n        }\n    }\n    if (errorProperties.length > 0 && !options.strip) {\n        throw Error(`The following properties are not valid: ${errorProperties.join(\", \")}. Only strings, numbers, booleans, and null are allowed.`);\n    }\n    return props;\n}\n// src/generic.ts\nvar DEV_SCRIPT_URL = \"https://va.vercel-scripts.com/v1/script.debug.js\";\nvar PROD_SCRIPT_URL = \"/_vercel/insights/script.js\";\nfunction inject(props = {\n    debug: true\n}) {\n    var _a;\n    if (!isBrowser()) return;\n    setMode(props.mode);\n    initQueue();\n    if (props.beforeSend) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return;\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n    script.dataset.sdkv = version;\n    if (props.disableAutoTrack) {\n        script.dataset.disableAutoTrack = \"1\";\n    }\n    if (props.endpoint) {\n        script.dataset.endpoint = props.endpoint;\n    }\n    if (props.dsn) {\n        script.dataset.dsn = props.dsn;\n    }\n    script.onerror = ()=>{\n        const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);\n    };\n    if (isDevelopment() && props.debug === false) {\n        script.dataset.debug = \"false\";\n    }\n    document.head.appendChild(script);\n}\nfunction track(name2, properties, options) {\n    var _a, _b;\n    if (!isBrowser()) {\n        const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n        if (isProduction()) {\n            console.warn(msg);\n        } else {\n            throw new Error(msg);\n        }\n        return;\n    }\n    if (!properties) {\n        (_a = window.va) == null ? void 0 : _a.call(window, \"event\", {\n            name: name2,\n            options\n        });\n        return;\n    }\n    try {\n        const props = parseProperties(properties, {\n            strip: isProduction()\n        });\n        (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n            name: name2,\n            data: props,\n            options\n        });\n    } catch (err) {\n        if (err instanceof Error && isDevelopment()) {\n            console.error(err);\n        }\n    }\n}\nfunction pageview({ route, path }) {\n    var _a;\n    (_a = window.va) == null ? void 0 : _a.call(window, \"pageview\", {\n        route,\n        path\n    });\n}\n// src/react.tsx\nfunction Analytics(props) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"Analytics.useEffect\": ()=>{\n            var _a;\n            if (props.beforeSend) {\n                (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n            }\n        }\n    }[\"Analytics.useEffect\"], [\n        props.beforeSend\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"Analytics.useEffect\": ()=>{\n            inject({\n                framework: props.framework || \"react\",\n                ...props.route !== void 0 && {\n                    disableAutoTrack: true\n                },\n                ...props\n            });\n        }\n    }[\"Analytics.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"Analytics.useEffect\": ()=>{\n            if (props.route && props.path) {\n                pageview({\n                    route: props.route,\n                    path: props.path\n                });\n            }\n        }\n    }[\"Analytics.useEffect\"], [\n        props.route,\n        props.path\n    ]);\n    return null;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUMwQjs7QUNBeEIsV0FBUTtBQUNSLGNBQVc7O0FDRk4sSUFBTSxZQUFZO0lBRXZCLElBQUksT0FBTyxJQUFJO0lBRWYsT0FBTyxLQUFLLFNBQVMsS0FBSyxRQUFjO1NBQ3JDLE9BQU8sTUFBTSxPQUFPLE9BQU8sRUFBQyxFQUFHLEtBQUssTUFBTTtJQUM3QztBQUNGOztBQ0xPLFNBQVMsWUFBcUI7SUFDbkMsT0FBTyxPQUFPLFNBQVc7QUFDM0I7QUFFQSxTQUFTLG9CQUFrRDtJQUN6RCxJQUFJO1FBQ0YsTUFBTSxNQUFNLFFBQVEsSUFBSTtRQUN4QixJQUFJLFFBQVEsaUJBQWlCLFFBQVEsUUFBUTtZQUMzQyxPQUFPO1FBQ1Q7SUFDRixTQUFTLEdBQUcsQ0FFWjtJQUNBLE9BQU87QUFDVDtBQUVPLFNBQVMsUUFBUSxPQUFhLFFBQWM7SUFDakQsSUFBSSxTQUFTLFFBQVE7UUFDbkIsT0FBTyxNQUFNLGtCQUFrQjtRQUMvQjtJQUNGO0lBRUEsT0FBTyxNQUFNO0FBQ2Y7QUFFTyxTQUFTLFVBQWdCO0lBQzlCLE1BQU0sT0FBTyxVQUFVLElBQUksT0FBTyxNQUFNLGtCQUFrQjtJQUMxRCxPQUFPLFFBQVE7QUFDakI7QUFFTyxTQUFTLGVBQXdCO0lBQ3RDLE9BQU8sUUFBUSxNQUFNO0FBQ3ZCO0FBRU8sU0FBUyxnQkFBeUI7SUFDdkMsT0FBTyxRQUFRLE1BQU07QUFDdkI7QUFFQSxTQUFTLFVBQ1AsS0FDQSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQ0s7SUFDekIsT0FBTztBQUNUO0FBRU8sU0FBUyxnQkFDZCxZQUNBLFNBRzJEO0lBQzNELElBQUksQ0FBQyxZQUFZLE9BQU87SUFDeEIsSUFBSSxRQUFRO0lBQ1osTUFBTSxrQkFBNEIsQ0FBQztJQUNuQyxXQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssT0FBTyxRQUFRLFVBQVUsRUFBRztRQUNyRCxJQUFJLE9BQU8sVUFBVSxZQUFZLFVBQVUsTUFBTTtZQUMvQyxJQUFJLFFBQVEsT0FBTztnQkFDakIsUUFBUSxVQUFVLEtBQUssS0FBSztZQUM5QixPQUFPO2dCQUNMLGdCQUFnQixLQUFLLEdBQUc7WUFDMUI7UUFDRjtJQUNGO0lBRUEsSUFBSSxnQkFBZ0IsU0FBUyxLQUFLLENBQUMsUUFBUSxPQUFPO1FBQ2hELE1BQU0sTUFDSiwyQ0FBMkMsZ0JBQWdCLEtBQ3pELE1BQ0Q7SUFFTDtJQUNBLE9BQU87QUFDVDs7QUN4RE8sSUFBTSxpQkFDWDtBQUNLLElBQU0sa0JBQWtCO0FBYy9CLFNBQVMsT0FDUCxRQUdJO0lBQ0YsT0FBTztBQUNULEdBQ007SUF6Q1I7SUEwQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRztJQUVsQixRQUFRLE1BQU0sSUFBSTtJQUVsQixVQUFVO0lBRVYsSUFBSSxNQUFNLFlBQVk7UUFDcEIsYUFBTyxPQUFQLGdDQUFZLGNBQWMsTUFBTTtJQUNsQztJQUVBLE1BQU0sTUFDSixNQUFNLGFBQWMsY0FBYyxLQUFJLGlCQUFpQjtJQUV6RCxJQUFJLFNBQVMsS0FBSyxjQUFjLGdCQUFnQixHQUFHLElBQUksR0FBRztJQUUxRCxNQUFNLFNBQVMsU0FBUyxjQUFjLFFBQVE7SUFDOUMsT0FBTyxNQUFNO0lBQ2IsT0FBTyxRQUFRO0lBQ2YsT0FBTyxRQUFRLE9BQ2IsUUFBZSxNQUFNLFlBQVksSUFBSSxNQUFNLFNBQVMsS0FBSztJQUMzRCxPQUFPLFFBQVEsT0FBTztJQUV0QixJQUFJLE1BQU0sa0JBQWtCO1FBQzFCLE9BQU8sUUFBUSxtQkFBbUI7SUFDcEM7SUFDQSxJQUFJLE1BQU0sVUFBVTtRQUNsQixPQUFPLFFBQVEsV0FBVyxNQUFNO0lBQ2xDO0lBQ0EsSUFBSSxNQUFNLEtBQUs7UUFDYixPQUFPLFFBQVEsTUFBTSxNQUFNO0lBQzdCO0lBRUEsT0FBTyxVQUFVO1FBQ2YsTUFBTSxlQUFlLGNBQWMsSUFDL0IsK0RBQ0E7UUFHSixRQUFRLElBQ04scURBQXFELEdBQUcsS0FBSyxZQUFZO0lBRTdFO0lBRUEsSUFBSSxjQUFjLEtBQUssTUFBTSxVQUFVLE9BQU87UUFDNUMsT0FBTyxRQUFRLFFBQVE7SUFDekI7SUFFQSxTQUFTLEtBQUssWUFBWSxNQUFNO0FBQ2xDO0FBUUEsU0FBUyxNQUNQQSxLQUFBQSxFQUNBLFlBQ0EsU0FHTTtJQXhHUjtJQXlHRSxJQUFJLENBQUMsVUFBVSxHQUFHO1FBQ2hCLE1BQU0sTUFDSjtRQUVGLElBQUksYUFBYSxHQUFHO1lBRWxCLFFBQVEsS0FBSyxHQUFHO1FBQ2xCLE9BQU87WUFDTCxNQUFNLElBQUksTUFBTSxHQUFHO1FBQ3JCO1FBRUE7SUFDRjtJQUVBLElBQUksQ0FBQyxZQUFZO1FBQ2YsYUFBTyxPQUFQLGdDQUFZLFNBQVM7WUFBRSxNQUFBQTtZQUFNO1FBQVE7UUFDckM7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNLFFBQVEsZ0JBQWdCLFlBQVk7WUFDeEMsT0FBTyxhQUFhO1FBQ3RCLENBQUM7UUFFRCxhQUFPLE9BQVAsZ0NBQVksU0FBUztZQUNuQixNQUFBQTtZQUNBLE1BQU07WUFDTjtRQUNGO0lBQ0YsU0FBUyxLQUFLO1FBQ1osSUFBSSxlQUFlLFNBQVMsY0FBYyxHQUFHO1lBRTNDLFFBQVEsTUFBTSxHQUFHO1FBQ25CO0lBQ0Y7QUFDRjtBQUVBLFNBQVMsU0FBUyxFQUNoQixPQUNBLE1BQ0YsRUFHUztJQXBKVDtJQXFKRSxhQUFPLE9BQVAsZ0NBQVksWUFBWTtRQUFFO1FBQU87SUFBSztBQUN4Qzs7QUoxSEEsU0FBUyxVQUNQLE9BS007SUFDTixnREFBUzsrQkFBQztZQW5DWjtZQW9DSSxJQUFJLE1BQU0sWUFBWTtnQkFDcEIsYUFBTyxPQUFQLGdDQUFZLGNBQWMsTUFBTTtZQUNsQztRQUNGOzhCQUFHO1FBQUMsTUFBTSxVQUFVO0tBQUM7SUFHckIsZ0RBQVM7K0JBQUM7WUFDUixPQUFPO2dCQUNMLFdBQVcsTUFBTSxhQUFhO2dCQUM5QixHQUFJLE1BQU0sVUFBVSxVQUFhO29CQUFFLGtCQUFrQjtnQkFBSztnQkFDMUQsR0FBRztZQUNMLENBQUM7UUFFSDs4QkFBRyxDQUFDLENBQUM7SUFFTCxnREFBUzsrQkFBQztZQUVSLElBQUksTUFBTSxTQUFTLE1BQU0sTUFBTTtnQkFDN0IsU0FBUztvQkFBRSxPQUFPLE1BQU07b0JBQU8sTUFBTSxNQUFNO2dCQUFLLENBQUM7WUFDbkQ7UUFDRjs4QkFBRztRQUFDLE1BQU07UUFBTyxNQUFNLElBQUk7S0FBQztJQUU1QixPQUFPO0FBQ1QiLCJzb3VyY2VzIjpbIkQ6XFxEZXNrdG9wXFxzcmNcXHJlYWN0LnRzeCIsIkQ6XFxEZXNrdG9wXFxwYWNrYWdlLmpzb24iLCJEOlxcRGVza3RvcFxcc3JjXFxxdWV1ZS50cyIsIkQ6XFxEZXNrdG9wXFxzcmNcXHV0aWxzLnRzIiwiRDpcXERlc2t0b3BcXHNyY1xcZ2VuZXJpYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbmplY3QsIHRyYWNrLCBwYWdldmlldyB9IGZyb20gJy4vZ2VuZXJpYyc7XG5pbXBvcnQgdHlwZSB7IEFuYWx5dGljc1Byb3BzLCBCZWZvcmVTZW5kLCBCZWZvcmVTZW5kRXZlbnQgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBJbmplY3RzIHRoZSBWZXJjZWwgV2ViIEFuYWx5dGljcyBzY3JpcHQgaW50byB0aGUgcGFnZSBoZWFkIGFuZCBzdGFydHMgdHJhY2tpbmcgcGFnZSB2aWV3cy4gUmVhZCBtb3JlIGluIG91ciBbZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvY29uY2VwdHMvYW5hbHl0aWNzL3BhY2thZ2UpLlxuICogQHBhcmFtIFtwcm9wc10gLSBBbmFseXRpY3Mgb3B0aW9ucy5cbiAqIEBwYXJhbSBbcHJvcHMubW9kZV0gLSBUaGUgbW9kZSB0byB1c2UgZm9yIHRoZSBhbmFseXRpY3Mgc2NyaXB0LiBEZWZhdWx0cyB0byBgYXV0b2AuXG4gKiAgLSBgYXV0b2AgLSBBdXRvbWF0aWNhbGx5IGRldGVjdCB0aGUgZW52aXJvbm1lbnQuICBVc2VzIGBwcm9kdWN0aW9uYCBpZiB0aGUgZW52aXJvbm1lbnQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKiAgLSBgcHJvZHVjdGlvbmAgLSBBbHdheXMgdXNlIHRoZSBwcm9kdWN0aW9uIHNjcmlwdC4gKFNlbmRzIGV2ZW50cyB0byB0aGUgc2VydmVyKVxuICogIC0gYGRldmVsb3BtZW50YCAtIEFsd2F5cyB1c2UgdGhlIGRldmVsb3BtZW50IHNjcmlwdC4gKExvZ3MgZXZlbnRzIHRvIHRoZSBjb25zb2xlKVxuICogQHBhcmFtIFtwcm9wcy5kZWJ1Z10gLSBXaGV0aGVyIHRvIGVuYWJsZSBkZWJ1ZyBsb2dnaW5nIGluIGRldmVsb3BtZW50LiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gKiBAcGFyYW0gW3Byb3BzLmJlZm9yZVNlbmRdIC0gQSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIG1vZGlmeSBldmVudHMgYmVmb3JlIHRoZXkgYXJlIHNlbnQuIFNob3VsZCByZXR1cm4gdGhlIGV2ZW50IG9iamVjdCBvciBgbnVsbGAgdG8gY2FuY2VsIHRoZSBldmVudC5cbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSAnQHZlcmNlbC9hbmFseXRpY3MvcmVhY3QnO1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAqICByZXR1cm4gKFxuICogICA8ZGl2PlxuICogICAgPEFuYWx5dGljcyAvPlxuICogICAgPGgxPk15IEFwcDwvaDE+XG4gKiAgPC9kaXY+XG4gKiApO1xuICogfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIEFuYWx5dGljcyhcbiAgcHJvcHM6IEFuYWx5dGljc1Byb3BzICYge1xuICAgIGZyYW1ld29yaz86IHN0cmluZztcbiAgICByb3V0ZT86IHN0cmluZyB8IG51bGw7XG4gICAgcGF0aD86IHN0cmluZyB8IG51bGw7XG4gIH1cbik6IG51bGwge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5iZWZvcmVTZW5kKSB7XG4gICAgICB3aW5kb3cudmE/LignYmVmb3JlU2VuZCcsIHByb3BzLmJlZm9yZVNlbmQpO1xuICAgIH1cbiAgfSwgW3Byb3BzLmJlZm9yZVNlbmRdKTtcblxuICAvLyBiaW9tZS1pZ25vcmUgbGludC9jb3JyZWN0bmVzcy91c2VFeGhhdXN0aXZlRGVwZW5kZW5jaWVzOiBvbmx5IHJ1biBvbmNlXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5qZWN0KHtcbiAgICAgIGZyYW1ld29yazogcHJvcHMuZnJhbWV3b3JrIHx8ICdyZWFjdCcsXG4gICAgICAuLi4ocHJvcHMucm91dGUgIT09IHVuZGVmaW5lZCAmJiB7IGRpc2FibGVBdXRvVHJhY2s6IHRydWUgfSksXG4gICAgICAuLi5wcm9wcyxcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzIC0tIG9ubHkgcnVuIG9uY2VcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gZXhwbGljaXRlbHkgdHJhY2sgcGFnZSB2aWV3LCBzaW5jZSB3ZSBkaXNhYmxlZCBhdXRvIHRyYWNraW5nXG4gICAgaWYgKHByb3BzLnJvdXRlICYmIHByb3BzLnBhdGgpIHtcbiAgICAgIHBhZ2V2aWV3KHsgcm91dGU6IHByb3BzLnJvdXRlLCBwYXRoOiBwcm9wcy5wYXRoIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLnJvdXRlLCBwcm9wcy5wYXRoXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7IHRyYWNrLCBBbmFseXRpY3MgfTtcbmV4cG9ydCB0eXBlIHsgQW5hbHl0aWNzUHJvcHMsIEJlZm9yZVNlbmQsIEJlZm9yZVNlbmRFdmVudCB9O1xuIiwie1xuICBcIm5hbWVcIjogXCJAdmVyY2VsL2FuYWx5dGljc1wiLFxuICBcInZlcnNpb25cIjogXCIxLjQuMVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiR2FpbiByZWFsLXRpbWUgdHJhZmZpYyBpbnNpZ2h0cyB3aXRoIFZlcmNlbCBXZWIgQW5hbHl0aWNzXCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiYW5hbHl0aWNzXCIsXG4gICAgXCJ2ZXJjZWxcIlxuICBdLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidXJsXCI6IFwiZ2l0aHViOnZlcmNlbC9hbmFseXRpY3NcIixcbiAgICBcImRpcmVjdG9yeVwiOiBcInBhY2thZ2VzL3dlYlwiXG4gIH0sXG4gIFwibGljZW5zZVwiOiBcIk1QTC0yLjBcIixcbiAgXCJleHBvcnRzXCI6IHtcbiAgICBcIi4vcGFja2FnZS5qc29uXCI6IFwiLi9wYWNrYWdlLmpzb25cIixcbiAgICBcIi5cIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvaW5kZXgubWpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL2FzdHJvXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2FzdHJvL2NvbXBvbmVudC50c1wiXG4gICAgfSxcbiAgICBcIi4vbmV4dFwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogXCIuL2Rpc3QvbmV4dC9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L25leHQvaW5kZXgubWpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvbmV4dC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vbnV4dFwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogXCIuL2Rpc3QvbnV4dC9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L251eHQvaW5kZXgubWpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvbnV4dC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vcmVhY3RcIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L3JlYWN0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvcmVhY3QvaW5kZXgubWpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvcmVhY3QvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3JlbWl4XCI6IHtcbiAgICAgIFwiYnJvd3NlclwiOiBcIi4vZGlzdC9yZW1peC9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3JlbWl4L2luZGV4Lm1qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3JlbWl4L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9zZXJ2ZXJcIjoge1xuICAgICAgXCJub2RlXCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5qc1wiLFxuICAgICAgXCJlZGdlLWxpZ2h0XCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3NlcnZlci9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9zZXJ2ZXIvaW5kZXguanNcIixcbiAgICAgIFwiZGVmYXVsdFwiOiBcIi4vZGlzdC9zZXJ2ZXIvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3N2ZWx0ZWtpdFwiOiB7XG4gICAgICBcInN2ZWx0ZVwiOiBcIi4vZGlzdC9zdmVsdGVraXQvaW5kZXgubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3N2ZWx0ZWtpdC9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi92dWVcIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L3Z1ZS9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3Z1ZS9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC92dWUvaW5kZXguanNcIlxuICAgIH1cbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2luZGV4Lm1qc1wiLFxuICBcInR5cGVzXCI6IFwiLi9kaXN0L2luZGV4LmQudHNcIixcbiAgXCJ0eXBlc1ZlcnNpb25zXCI6IHtcbiAgICBcIipcIjoge1xuICAgICAgXCIqXCI6IFtcbiAgICAgICAgXCJkaXN0L2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwibmV4dFwiOiBbXG4gICAgICAgIFwiZGlzdC9uZXh0L2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwibnV4dFwiOiBbXG4gICAgICAgIFwiZGlzdC9udXh0L2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwicmVhY3RcIjogW1xuICAgICAgICBcImRpc3QvcmVhY3QvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJyZW1peFwiOiBbXG4gICAgICAgIFwiZGlzdC9yZW1peC9pbmRleC5kLnRzXCJcbiAgICAgIF0sXG4gICAgICBcInNlcnZlclwiOiBbXG4gICAgICAgIFwiZGlzdC9zZXJ2ZXIvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJzdmVsdGVraXRcIjogW1xuICAgICAgICBcImRpc3Qvc3ZlbHRla2l0L2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwidnVlXCI6IFtcbiAgICAgICAgXCJkaXN0L3Z1ZS9pbmRleC5kLnRzXCJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJidWlsZFwiOiBcInRzdXAgJiYgcG5wbSBjb3B5LWFzdHJvXCIsXG4gICAgXCJjb3B5LWFzdHJvXCI6IFwiY3AgLVIgc3JjL2FzdHJvIGRpc3QvXCIsXG4gICAgXCJkZXZcIjogXCJwbnBtIGNvcHktYXN0cm8gJiYgdHN1cCAtLXdhdGNoXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC5cIixcbiAgICBcImxpbnQtZml4XCI6IFwiZXNsaW50IC4gLS1maXhcIixcbiAgICBcInRlc3RcIjogXCJqZXN0XCIsXG4gICAgXCJ0eXBlLWNoZWNrXCI6IFwidHNjIC0tbm9FbWl0XCJcbiAgfSxcbiAgXCJlc2xpbnRDb25maWdcIjoge1xuICAgIFwiZXh0ZW5kc1wiOiBbXG4gICAgICBcIkB2ZXJjZWwvZXNsaW50LWNvbmZpZ1wiXG4gICAgXSxcbiAgICBcInJ1bGVzXCI6IHtcbiAgICAgIFwidHNkb2Mvc3ludGF4XCI6IFwib2ZmXCJcbiAgICB9LFxuICAgIFwiaWdub3JlUGF0dGVybnNcIjogW1xuICAgICAgXCJqZXN0LnNldHVwLnRzXCJcbiAgICBdXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBqZXN0L2dsb2JhbHNcIjogXCJeMjkuNy4wXCIsXG4gICAgXCJAc3djL2NvcmVcIjogXCJeMS44LjBcIixcbiAgICBcIkBzd2MvamVzdFwiOiBcIl4wLjIuMzdcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNi42LjNcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcmVhY3RcIjogXCJeMTYuMC4xXCIsXG4gICAgXCJAdHlwZXMvbm9kZVwiOiBcIl4yMC4xNy42XCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMy4xMlwiLFxuICAgIFwiQHZlcmNlbC9lc2xpbnQtY29uZmlnXCI6IFwid29ya3NwYWNlOjAuMC4wXCIsXG4gICAgXCJqZXN0XCI6IFwiXjI5LjcuMFwiLFxuICAgIFwiamVzdC1lbnZpcm9ubWVudC1qc2RvbVwiOiBcIl4yOS43LjBcIixcbiAgICBcInNlcnZlci1vbmx5XCI6IFwiXjAuMC4xXCIsXG4gICAgXCJzdmVsdGVcIjogXCJeNS4xLjEwXCIsXG4gICAgXCJ0c3VwXCI6IFwiNy4xLjBcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjUuMTJcIixcbiAgICBcInZ1ZS1yb3V0ZXJcIjogXCJeNC40LjVcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHJlbWl4LXJ1bi9yZWFjdFwiOiBcIl4yXCIsXG4gICAgXCJAc3ZlbHRlanMva2l0XCI6IFwiXjEgfHwgXjJcIixcbiAgICBcIm5leHRcIjogXCI+PSAxM1wiLFxuICAgIFwicmVhY3RcIjogXCJeMTggfHwgXjE5IHx8IF4xOS4wLjAtcmNcIixcbiAgICBcInN2ZWx0ZVwiOiBcIj49IDRcIixcbiAgICBcInZ1ZVwiOiBcIl4zXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjRcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNNZXRhXCI6IHtcbiAgICBcIkByZW1peC1ydW4vcmVhY3RcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcIkBzdmVsdGVqcy9raXRcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcIm5leHRcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInJlYWN0XCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzdmVsdGVcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInZ1ZVwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwidnVlLXJvdXRlclwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpbml0UXVldWUgPSAoKTogdm9pZCA9PiB7XG4gIC8vIGluaXRpYWxpemUgdmEgdW50aWwgc2NyaXB0IGlzIGxvYWRlZFxuICBpZiAod2luZG93LnZhKSByZXR1cm47XG5cbiAgd2luZG93LnZhID0gZnVuY3Rpb24gYSguLi5wYXJhbXMpOiB2b2lkIHtcbiAgICAod2luZG93LnZhcSA9IHdpbmRvdy52YXEgfHwgW10pLnB1c2gocGFyYW1zKTtcbiAgfTtcbn07XG4iLCJpbXBvcnQgdHlwZSB7IEFsbG93ZWRQcm9wZXJ0eVZhbHVlcywgTW9kZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEVudmlyb25tZW50KCk6ICdkZXZlbG9wbWVudCcgfCAncHJvZHVjdGlvbicge1xuICB0cnkge1xuICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIGlmIChlbnYgPT09ICdkZXZlbG9wbWVudCcgfHwgZW52ID09PSAndGVzdCcpIHtcbiAgICAgIHJldHVybiAnZGV2ZWxvcG1lbnQnO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGRvIG5vdGhpbmcsIHRoaXMgaXMgb2theVxuICB9XG4gIHJldHVybiAncHJvZHVjdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNb2RlKG1vZGU6IE1vZGUgPSAnYXV0bycpOiB2b2lkIHtcbiAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgIHdpbmRvdy52YW0gPSBkZXRlY3RFbnZpcm9ubWVudCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdpbmRvdy52YW0gPSBtb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kZSgpOiBNb2RlIHtcbiAgY29uc3QgbW9kZSA9IGlzQnJvd3NlcigpID8gd2luZG93LnZhbSA6IGRldGVjdEVudmlyb25tZW50KCk7XG4gIHJldHVybiBtb2RlIHx8ICdwcm9kdWN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZHVjdGlvbigpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldE1vZGUoKSA9PT0gJ3Byb2R1Y3Rpb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZXZlbG9wbWVudCgpOiBib29sZWFuIHtcbiAgcmV0dXJuIGdldE1vZGUoKSA9PT0gJ2RldmVsb3BtZW50Jztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlS2V5KFxuICBrZXk6IHN0cmluZyxcbiAgeyBba2V5XTogXywgLi4ucmVzdCB9XG4pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gIHJldHVybiByZXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQcm9wZXJ0aWVzKFxuICBwcm9wZXJ0aWVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IHVuZGVmaW5lZCxcbiAgb3B0aW9uczoge1xuICAgIHN0cmlwPzogYm9vbGVhbjtcbiAgfVxuKTogRXJyb3IgfCBSZWNvcmQ8c3RyaW5nLCBBbGxvd2VkUHJvcGVydHlWYWx1ZXM+IHwgdW5kZWZpbmVkIHtcbiAgaWYgKCFwcm9wZXJ0aWVzKSByZXR1cm4gdW5kZWZpbmVkO1xuICBsZXQgcHJvcHMgPSBwcm9wZXJ0aWVzO1xuICBjb25zdCBlcnJvclByb3BlcnRpZXM6IHN0cmluZ1tdID0gW107XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BlcnRpZXMpKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLnN0cmlwKSB7XG4gICAgICAgIHByb3BzID0gcmVtb3ZlS2V5KGtleSwgcHJvcHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JQcm9wZXJ0aWVzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZXJyb3JQcm9wZXJ0aWVzLmxlbmd0aCA+IDAgJiYgIW9wdGlvbnMuc3RyaXApIHtcbiAgICB0aHJvdyBFcnJvcihcbiAgICAgIGBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIG5vdCB2YWxpZDogJHtlcnJvclByb3BlcnRpZXMuam9pbihcbiAgICAgICAgJywgJ1xuICAgICAgKX0uIE9ubHkgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMsIGFuZCBudWxsIGFyZSBhbGxvd2VkLmBcbiAgICApO1xuICB9XG4gIHJldHVybiBwcm9wcyBhcyBSZWNvcmQ8c3RyaW5nLCBBbGxvd2VkUHJvcGVydHlWYWx1ZXM+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZVJvdXRlKFxuICBwYXRobmFtZTogc3RyaW5nIHwgbnVsbCxcbiAgcGF0aFBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgc3RyaW5nW10+IHwgbnVsbFxuKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmICghcGF0aG5hbWUgfHwgIXBhdGhQYXJhbXMpIHtcbiAgICByZXR1cm4gcGF0aG5hbWU7XG4gIH1cblxuICBsZXQgcmVzdWx0ID0gcGF0aG5hbWU7XG4gIHRyeSB7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHBhdGhQYXJhbXMpO1xuICAgIC8vIHNpbXBsZSBrZXlzIG11c3QgYmUgaGFuZGxlZCBmaXJzdFxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlKTtcbiAgICAgICAgaWYgKG1hdGNoZXIudGVzdChyZXN1bHQpKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobWF0Y2hlciwgYC9bJHtrZXl9XWApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGFycmF5IHZhbHVlcyBuZXh0XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllcykge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXIgPSB0dXJuVmFsdWVUb1JlZ0V4cCh2YWx1ZS5qb2luKCcvJykpO1xuICAgICAgICBpZiAobWF0Y2hlci50ZXN0KHJlc3VsdCkpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShtYXRjaGVyLCBgL1suLi4ke2tleX1dYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBwYXRobmFtZTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0dXJuVmFsdWVUb1JlZ0V4cCh2YWx1ZTogc3RyaW5nKTogUmVnRXhwIHtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYC8ke2VzY2FwZVJlZ0V4cCh2YWx1ZSl9KD89Wy8/I118JClgKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuIiwiaW1wb3J0IHsgbmFtZSBhcyBwYWNrYWdlTmFtZSwgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBpbml0UXVldWUgfSBmcm9tICcuL3F1ZXVlJztcbmltcG9ydCB0eXBlIHtcbiAgQWxsb3dlZFByb3BlcnR5VmFsdWVzLFxuICBBbmFseXRpY3NQcm9wcyxcbiAgRmxhZ3NEYXRhSW5wdXQsXG4gIEJlZm9yZVNlbmQsXG4gIEJlZm9yZVNlbmRFdmVudCxcbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1xuICBpc0Jyb3dzZXIsXG4gIHBhcnNlUHJvcGVydGllcyxcbiAgc2V0TW9kZSxcbiAgaXNEZXZlbG9wbWVudCxcbiAgaXNQcm9kdWN0aW9uLFxuICBjb21wdXRlUm91dGUsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgREVWX1NDUklQVF9VUkwgPVxuICAnaHR0cHM6Ly92YS52ZXJjZWwtc2NyaXB0cy5jb20vdjEvc2NyaXB0LmRlYnVnLmpzJztcbmV4cG9ydCBjb25zdCBQUk9EX1NDUklQVF9VUkwgPSAnL192ZXJjZWwvaW5zaWdodHMvc2NyaXB0LmpzJztcblxuLyoqXG4gKiBJbmplY3RzIHRoZSBWZXJjZWwgV2ViIEFuYWx5dGljcyBzY3JpcHQgaW50byB0aGUgcGFnZSBoZWFkIGFuZCBzdGFydHMgdHJhY2tpbmcgcGFnZSB2aWV3cy4gUmVhZCBtb3JlIGluIG91ciBbZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvY29uY2VwdHMvYW5hbHl0aWNzL3BhY2thZ2UpLlxuICogQHBhcmFtIFtwcm9wc10gLSBBbmFseXRpY3Mgb3B0aW9ucy5cbiAqIEBwYXJhbSBbcHJvcHMubW9kZV0gLSBUaGUgbW9kZSB0byB1c2UgZm9yIHRoZSBhbmFseXRpY3Mgc2NyaXB0LiBEZWZhdWx0cyB0byBgYXV0b2AuXG4gKiAgLSBgYXV0b2AgLSBBdXRvbWF0aWNhbGx5IGRldGVjdCB0aGUgZW52aXJvbm1lbnQuICBVc2VzIGBwcm9kdWN0aW9uYCBpZiB0aGUgZW52aXJvbm1lbnQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKiAgLSBgcHJvZHVjdGlvbmAgLSBBbHdheXMgdXNlIHRoZSBwcm9kdWN0aW9uIHNjcmlwdC4gKFNlbmRzIGV2ZW50cyB0byB0aGUgc2VydmVyKVxuICogIC0gYGRldmVsb3BtZW50YCAtIEFsd2F5cyB1c2UgdGhlIGRldmVsb3BtZW50IHNjcmlwdC4gKExvZ3MgZXZlbnRzIHRvIHRoZSBjb25zb2xlKVxuICogQHBhcmFtIFtwcm9wcy5kZWJ1Z10gLSBXaGV0aGVyIHRvIGVuYWJsZSBkZWJ1ZyBsb2dnaW5nIGluIGRldmVsb3BtZW50LiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gKiBAcGFyYW0gW3Byb3BzLmJlZm9yZVNlbmRdIC0gQSBtaWRkbGV3YXJlIGZ1bmN0aW9uIHRvIG1vZGlmeSBldmVudHMgYmVmb3JlIHRoZXkgYXJlIHNlbnQuIFNob3VsZCByZXR1cm4gdGhlIGV2ZW50IG9iamVjdCBvciBgbnVsbGAgdG8gY2FuY2VsIHRoZSBldmVudC5cbiAqIEBwYXJhbSBbcHJvcHMuZHNuXSAtIFRoZSBEU04gb2YgdGhlIHByb2plY3QgdG8gc2VuZCBldmVudHMgdG8uIE9ubHkgcmVxdWlyZWQgd2hlbiBzZWxmLWhvc3RpbmcuXG4gKiBAcGFyYW0gW3Byb3BzLmRpc2FibGVBdXRvVHJhY2tdIC0gV2hldGhlciB0aGUgaW5qZWN0ZWQgc2NyaXB0IHNob3VsZCB0cmFjayBwYWdlIHZpZXdzIGZyb20gcHVzaFN0YXRlIGV2ZW50cy4gRGlzYWJsZSBpZiByb3V0ZSBpcyB1cGRhdGVkIGFmdGVyIHB1c2hTdGF0ZSwgYSBtYW51YWxseSBjYWxsIHBhZ2UgcGFnZXZpZXcoKS5cbiAqL1xuZnVuY3Rpb24gaW5qZWN0KFxuICBwcm9wczogQW5hbHl0aWNzUHJvcHMgJiB7XG4gICAgZnJhbWV3b3JrPzogc3RyaW5nO1xuICAgIGRpc2FibGVBdXRvVHJhY2s/OiBib29sZWFuO1xuICB9ID0ge1xuICAgIGRlYnVnOiB0cnVlLFxuICB9XG4pOiB2b2lkIHtcbiAgaWYgKCFpc0Jyb3dzZXIoKSkgcmV0dXJuO1xuXG4gIHNldE1vZGUocHJvcHMubW9kZSk7XG5cbiAgaW5pdFF1ZXVlKCk7XG5cbiAgaWYgKHByb3BzLmJlZm9yZVNlbmQpIHtcbiAgICB3aW5kb3cudmE/LignYmVmb3JlU2VuZCcsIHByb3BzLmJlZm9yZVNlbmQpO1xuICB9XG5cbiAgY29uc3Qgc3JjID1cbiAgICBwcm9wcy5zY3JpcHRTcmMgfHwgKGlzRGV2ZWxvcG1lbnQoKSA/IERFVl9TQ1JJUFRfVVJMIDogUFJPRF9TQ1JJUFRfVVJMKTtcblxuICBpZiAoZG9jdW1lbnQuaGVhZC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjKj1cIiR7c3JjfVwiXWApKSByZXR1cm47XG5cbiAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSBzcmM7XG4gIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gIHNjcmlwdC5kYXRhc2V0LnNka24gPVxuICAgIHBhY2thZ2VOYW1lICsgKHByb3BzLmZyYW1ld29yayA/IGAvJHtwcm9wcy5mcmFtZXdvcmt9YCA6ICcnKTtcbiAgc2NyaXB0LmRhdGFzZXQuc2RrdiA9IHZlcnNpb247XG5cbiAgaWYgKHByb3BzLmRpc2FibGVBdXRvVHJhY2spIHtcbiAgICBzY3JpcHQuZGF0YXNldC5kaXNhYmxlQXV0b1RyYWNrID0gJzEnO1xuICB9XG4gIGlmIChwcm9wcy5lbmRwb2ludCkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmVuZHBvaW50ID0gcHJvcHMuZW5kcG9pbnQ7XG4gIH1cbiAgaWYgKHByb3BzLmRzbikge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRzbiA9IHByb3BzLmRzbjtcbiAgfVxuXG4gIHNjcmlwdC5vbmVycm9yID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGlzRGV2ZWxvcG1lbnQoKVxuICAgICAgPyAnUGxlYXNlIGNoZWNrIGlmIGFueSBhZCBibG9ja2VycyBhcmUgZW5hYmxlZCBhbmQgdHJ5IGFnYWluLidcbiAgICAgIDogJ0JlIHN1cmUgdG8gZW5hYmxlIFdlYiBBbmFseXRpY3MgZm9yIHlvdXIgcHJvamVjdCBhbmQgZGVwbG95IGFnYWluLiBTZWUgaHR0cHM6Ly92ZXJjZWwuY29tL2RvY3MvYW5hbHl0aWNzL3F1aWNrc3RhcnQgZm9yIG1vcmUgaW5mb3JtYXRpb24uJztcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlIC0tIExvZ2dpbmcgdG8gY29uc29sZSBpcyBpbnRlbnRpb25hbFxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYFtWZXJjZWwgV2ViIEFuYWx5dGljc10gRmFpbGVkIHRvIGxvYWQgc2NyaXB0IGZyb20gJHtzcmN9LiAke2Vycm9yTWVzc2FnZX1gXG4gICAgKTtcbiAgfTtcblxuICBpZiAoaXNEZXZlbG9wbWVudCgpICYmIHByb3BzLmRlYnVnID09PSBmYWxzZSkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRlYnVnID0gJ2ZhbHNlJztcbiAgfVxuXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn1cblxuLyoqXG4gKiBUcmFja3MgYSBjdXN0b20gZXZlbnQuIFBsZWFzZSByZWZlciB0byB0aGUgW2RvY3VtZW50YXRpb25dKGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL2NvbmNlcHRzL2FuYWx5dGljcy9jdXN0b20tZXZlbnRzKSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBjdXN0b20gZXZlbnRzLlxuICogQHBhcmFtIG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQuXG4gKiAqIEV4YW1wbGVzOiBgUHVyY2hhc2VgLCBgQ2xpY2sgQnV0dG9uYCwgb3IgYFBsYXkgVmlkZW9gLlxuICogQHBhcmFtIFtwcm9wZXJ0aWVzXSAtIEFkZGl0aW9uYWwgcHJvcGVydGllcyBvZiB0aGUgZXZlbnQuIE5lc3RlZCBvYmplY3RzIGFyZSBub3Qgc3VwcG9ydGVkLiBBbGxvd2VkIHZhbHVlcyBhcmUgYHN0cmluZ2AsIGBudW1iZXJgLCBgYm9vbGVhbmAsIGFuZCBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIHRyYWNrKFxuICBuYW1lOiBzdHJpbmcsXG4gIHByb3BlcnRpZXM/OiBSZWNvcmQ8c3RyaW5nLCBBbGxvd2VkUHJvcGVydHlWYWx1ZXM+LFxuICBvcHRpb25zPzoge1xuICAgIGZsYWdzPzogRmxhZ3NEYXRhSW5wdXQ7XG4gIH1cbik6IHZvaWQge1xuICBpZiAoIWlzQnJvd3NlcigpKSB7XG4gICAgY29uc3QgbXNnID1cbiAgICAgICdbVmVyY2VsIFdlYiBBbmFseXRpY3NdIFBsZWFzZSBpbXBvcnQgYHRyYWNrYCBmcm9tIGBAdmVyY2VsL2FuYWx5dGljcy9zZXJ2ZXJgIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpbiBhIHNlcnZlciBlbnZpcm9ubWVudCc7XG5cbiAgICBpZiAoaXNQcm9kdWN0aW9uKCkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlIC0tIFNob3cgd2FybmluZyBpbiBwcm9kdWN0aW9uXG4gICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgd2luZG93LnZhPy4oJ2V2ZW50JywgeyBuYW1lLCBvcHRpb25zIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcHJvcHMgPSBwYXJzZVByb3BlcnRpZXMocHJvcGVydGllcywge1xuICAgICAgc3RyaXA6IGlzUHJvZHVjdGlvbigpLFxuICAgIH0pO1xuXG4gICAgd2luZG93LnZhPy4oJ2V2ZW50Jywge1xuICAgICAgbmFtZSxcbiAgICAgIGRhdGE6IHByb3BzLFxuICAgICAgb3B0aW9ucyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGlzRGV2ZWxvcG1lbnQoKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgLS0gTG9nZ2luZyB0byBjb25zb2xlIGlzIGludGVudGlvbmFsXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBhZ2V2aWV3KHtcbiAgcm91dGUsXG4gIHBhdGgsXG59OiB7XG4gIHJvdXRlPzogc3RyaW5nIHwgbnVsbDtcbiAgcGF0aD86IHN0cmluZztcbn0pOiB2b2lkIHtcbiAgd2luZG93LnZhPy4oJ3BhZ2V2aWV3JywgeyByb3V0ZSwgcGF0aCB9KTtcbn1cblxuZXhwb3J0IHsgaW5qZWN0LCB0cmFjaywgcGFnZXZpZXcsIGNvbXB1dGVSb3V0ZSB9O1xuZXhwb3J0IHR5cGUgeyBBbmFseXRpY3NQcm9wcywgQmVmb3JlU2VuZCwgQmVmb3JlU2VuZEV2ZW50IH07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZGVmYXVsdC1leHBvcnQgLS0gRGVmYXVsdCBleHBvcnQgaXMgaW50ZW50aW9uYWxcbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5qZWN0LFxuICB0cmFjayxcbiAgY29tcHV0ZVJvdXRlLFxufTtcbiJdLCJuYW1lcyI6WyJuYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.mjs\n");

/***/ }),

/***/ "(rsc)/./node_modules/@vercel/analytics/dist/react/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Analytics: () => (/* binding */ Analytics),
/* harmony export */   track: () => (/* binding */ track)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-server-dom-webpack/server.edge */ "(rsc)/./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-webpack-server-edge.js");

const Analytics = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call Analytics() from the server but Analytics is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"D:\\Desktop\\mern-portfolio\\client\\node_modules\\@vercel\\analytics\\dist\\react\\index.mjs",
"Analytics",
);const track = (0,react_server_dom_webpack_server_edge__WEBPACK_IMPORTED_MODULE_0__.registerClientReference)(
function() { throw new Error("Attempted to call track() from the server but track is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."); },
"D:\\Desktop\\mern-portfolio\\client\\node_modules\\@vercel\\analytics\\dist\\react\\index.mjs",
"track",
);

/***/ })

};
;