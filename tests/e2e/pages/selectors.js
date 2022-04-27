
module.exports = {



    //--------------------------------------------login---------------------------------------------//



    // selectors
    frontend: {
        //fronted menus
        home: "//a[contains(text(),'Home')]",
        cart: "//a[contains(text(),'Cart')]",
        checkout: "//a[contains(text(),'Checkout')]",
        dashboard: "//a[contains(text(),'Dashboard')]",
        myAccount: "//a[contains(text(),'My account')]",
        myOrders: "//a[contains(text(),'My Orders')]",
        samplePage: "//a[contains(text(),'Sample Page')]",
        shop: "//a[contains(text(),'Shop')]",
        storeList: "//a[contains(text(),'Store List')]",

        //go to vendor dashboard
        goToVendorDashboard: ".dokan-btn.dokan-btn-theme.vendor-dashboard",

        //user login
        username: "#username",
        userPassword: "#password",
        rememberMe: "#rememberme",
        logIn: "//button[@value='Log in']",
        lostPassword: ".woocommerce-LostPassword > a",

        //user logout
        customerLogout: ".woocommerce-MyAccount-navigation-link--customer-logout > a",
        vendorLogout: ".fa-power-off",

        //user forget password
        resetPasswordEmail: "#user_login",
        resetPasswordBtn: ".woocommerce-Button.button"
    },

    backend: {
        // admin login
        email: "#user_login",
        password: "#user_pass",
        rememberMe: "#rememberme",
        login: "#wp-submit",
        dashboardMenu: ".wp-first-item > .wp-menu-name",
        dashboardText: ".wrap h1",
        // admin logout
        userMenu: "#wp-admin-bar-my-account a",
        logout: "#wp-admin-bar-logout a",
        //logout message
        logoutSuccessMessage: "#login p",
    },



    //--------------------------------------------admin---------------------------------------------//



    admin: {
        //admin dashboard
        aDashboard: {
            //dashboard menus
            dashboard: ".wp-first-item .wp-menu-name",
            posts: ".menu-icon-post .wp-menu-name",
            media: ".menu-icon-media .wp-menu-name",
            pages: ".menu-icon-page .wp-menu-name",
            comments: ".menu-icon-comments .wp-menu-name",
            emailLog: ".toplevel_page_email-log .wp-menu-name",
            dokanMenu:"#toplevel_page_dokan",
            dokan: "#toplevel_page_dokan .wp-menu-name",
            wooCommerce: ".toplevel_page_woocommerce .wp-menu-name",
            products: ".menu-icon-product .wp-menu-name",
            bookings: ".menu-icon-wc_booking .wp-menu-name",
            analytics: ".toplevel_page_wc-admin\\&path\\=\\/analytics\\/overview .wp-menu-name",
            marketing: ".toplevel_page_woocommerce-marketing .wp-menu-name",
            elementor: ".toplevel_page_elementor .wp-menu-name",
            templates: ".menu-icon-elementor_library .wp-menu-name",
            appearance: ".menu-icon-appearance .wp-menu-name",
            plugins: ".menu-icon-plugins .wp-menu-name",
            users: ".menu-icon-users .wp-menu-name",
            tools: ".menu-icon-tools .wp-menu-name",
            settings: ".menu-icon-settings .wp-menu-name",
            locoTranslate: ".toplevel_page_loco .wp-menu-name",
            //collapse menu
            collapseMenu: '#collapse-button',
        },

        //dashboard
        dashboard: {
            //menus
            home: "//li[@id='menu-dashboard']//a[contains(text(),'Home')]",
            updates: "//li[@id='menu-dashboard']//a[contains(text(),'Updates ')]",
        },
        //posts
        posts: {
            //menus
            allPosts: "//li[@id='menu-posts']//a[contains(text(),'All Posts')]",
            addNew: "//li[@id='menu-posts']//a[contains(text(),'Add New')]",
            categories: "//li[@id='menu-posts']//a[contains(text(),'Categories')]",
            tags: "//li[@id='menu-posts']//a[contains(text(),'Tags')]",
        },
        //media
        media: {
            //menus
            library: "//li[@id='menu-media']//a[contains(text(),'Library')]",
            addNew: "//li[@id='menu-media']//a[contains(text(),'Add New')]"
        },
        //pages
        pages: {
            //menus
            allPages: "//li[@id='menu-pages']//a[contains(text(),'All Pages')]",
            addNew: "//li[@id='menu-pages']//a[contains(text(),'Add New')]",
        },
        //comments
        comments: {
            //nav tabs
            all: "//li[@class='all']",
            mine: "//li[@class='mine']",
            pending: "//li[@class='moderated']",
            approved: "//li[@class='approved']",
            spam: "//li[@class='spam']",
            trash: "//li[@class='trash']",
        },
        //emailLog
        emailLog: {
            //menus
            viewLogs: "//li[@id='toplevel_page_email-log']//a[contains(text(),'View Logs')]",
            settings: "//li[@id='toplevel_page_email-log']//a[contains(text(),'Settings')]",
            addOns: "//li[@id='toplevel_page_email-log']//a[contains(text(),'Add-ons')]",
            systemInfo: "//li[@id='toplevel_page_email-log']//a[contains(text(),'System Info')]",
        },
        //dokan
        dokan: {
            //dokan menus
            dashboardMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Dashboard']",
            withdrawMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Withdraw']",
            vendorsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Vendors']",
            abuseReportsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Abuse Reports']",
            storeReviewsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Store Reviews']",
            storeSupportMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Store Support']",
            announcementsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Announcements']",
            refundsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[contains(text(),'Refunds')]",
            reportsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Reports']",
            modulesMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Modules']",
            toolsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Tools']",
            verificationsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Verifications']",
            advertisingMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Advertising']",
            wholesaleCustomerMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Wholesale Customer']",
            helpMenu: "//li[contains(@class,'toplevel_page_dokan')]//span[text()='Help']/..",
            settingsMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='Settings']",
            licenseMenu: "//li[contains(@class,'toplevel_page_dokan')]//a[text()='License']",

            //dashboard
            dashboard: {
                //divs
                atAGlance: ".postbox.dokan-postbox.dokan-status",
                overview: ".postbox.dokan-postbox.overview-chart",
                dokanNewsUpdates: "//span[contains(text(),'Dokan News Updates')]/../../..",

                //at a glance
                netSalesThisMonth: ".sale strong",
                commissionEarned: ".commission strong div",
                signupThisMonth: ".vendor strong",
                awaitingApproval: ".approval strong",
                createdThisMonth: ".product strong",
                awaitingApproval: ".withdraw strong ",
            },
            //withdraw
            withdraw: {
                //nav tabs
                pending: "//ul[@class='subsubsub']//li//a[contains(text(),'Pending')]",
                approved: "//ul[@class='subsubsub']//li//a[contains(text(),'Approved')]",
                cancelled: "//ul[@class='subsubsub']//li//a[contains(text(),'Cancelled')]",
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
            },
            //vendors
            vendors: {
                // add new vendors
                //menus
                accountInfo: "//div[@class='tab-link']//a[contains(text(), 'Account Info')]",
                address: "//div[@class='tab-link']//a[contains(text(), 'Address')]",
                paymentOptions: "//div[@class='tab-link']//a[contains(text(), 'Payment Options')]",
                addNewVendorCloseModal: '.modal-close',
                next: '.button.button-primary.button-hero',

                //account info
                addNewVendor: '.page-title-action',
                vendorPicture: ".profile-image .dokan-upload-image",
                banner: '.banner-image .dokan-upload-image button',
                firstName: '#first-name',
                lastName: '#last-name',
                storeName: '#store-name',
                storeUrl: '#user-nicename',
                phoneNumber: '#store-phone',
                email: '#store-email',
                username: '#user-login',
                generatePassword: '.button.button-secondary',
                password: '#store-password',
                companyName: "#company-name",
                companyIdEuidNumber: "#company-id-number",
                vatOrTaxNumber: "#vat-tax-number",
                nameOfBank: "#dokan-bank-name",
                bankIban: "#dokan-bank-iban",
                //address
                street1: '#street-1',
                street2: '#street-2',
                city: '#city',
                zip: '#zip',
                country: '.multiselect__single',
                countryInput: '#country',
                state: '#state',
                // payment options
                accountName: '#account-name',
                accountNumber: '#account-number',
                bankName: '#bank-name',
                bankAddress: '#bank-address',
                routingNumber: '#routing-number',
                iban: '#iban',
                swift: '#swift',
                payPalEmail: '#paypal-email',
                enableSelling: "//span[contains(text(), 'Enable Selling')]/..//span",
                publishProductDirectly: "//span[contains(text(), 'Publish Product Directly')]/..//span",
                makeVendorFeature: "//span[contains(text(), 'Make Vendor Featured')]/..//span",
                createVendor: '.button.button-primary.button-hero',
                //sweet alert
                createAnother: '.swal2-confirm',  //sweet alert confirm 
                editVendorInfo: '.swal2-cancel',  //sweet alert cancel
                closeSweetAlert: '.swal2-close', //sweet alert close

                //edit vendor form
                editVendor: {
                    editVendorIcon: ".dashicons-edit",
                    changeStorePhoto: ".profile-icon .dokan-upload-image img",
                    changeStoreBanner: ".profile-banner .dokan-upload-image img",
                    //account info
                    firstName: '#first-name',
                    lastName: '#last-name',
                    storeName: '#store-name',
                    phoneNumber: '#store-phone',
                    email: '#store-email',
                    companyName: "#company-name",
                    companyIdEuidNumber: "#company-id-number",
                    vatOrTaxNumber: "#vat-tax-number",
                    nameOfBank: "#dokan-bank-name",
                    bankIban: "#dokan-bank-iban",
                    // address
                    street1: '#street-1',
                    street2: '#street-2',
                    city: '#city',
                    zip: '#zip',
                    country: '.address-multiselect .multiselect__single',
                    countryInput: '#country',
                    state: '#state',
                    // social options
                    facebook: "#facebook",
                    flickr: "#flickr",
                    twitter: "#twitter",
                    youtube: "#youtube",
                    linkedin: "#linkedin",
                    pinterest: "#pinterest",
                    instagram: "#instagram",
                    // payment options
                    accountName: '#account-name',
                    accountNumber: '#account-number',
                    bankName: '#bank-name',
                    bankAddress: '#bank-address',
                    routingNumber: '#routing-number',
                    iban: '#iban',
                    swift: '#swift',
                    payPalEmail: '#paypal-email',
                    AdminCommissionType: "//label[@for='commission-type']/..//span[@class='multiselect__single']",
                    AdminCommissionFlat: ".wc_input_price",
                    AdminCommissionPercentage: ".wc_input_decimal",
                    enableSelling: "//span[contains(text(), 'Enable Selling')]/..//span",
                    publishProductDirectly: "//span[contains(text(), 'Publish Product Directly')]/..//span",
                    makeVendorFeature: "//span[contains(text(), 'Make Vendor Featured')]/..//span",
                    // vendor subscription
                    AssignSubscriptionPack: ".multiselect--active > .multiselect__tags",
                    //edit options
                    cancelEdit: "//div[contains(@class, 'action-links footer')]//button[contains(text(),'Cancel')]",
                    saveChanges: "//div[contains(@class, 'action-links footer')]//button[contains(text(),'Save Changes')]",
                    cancelEditOnTop: "//div[contains(@class, 'profile-banner')]//button[contains(text(),'Cancel')]",
                    saveChangesOnTop: "//div[contains(@class, 'profile-banner')]//button[contains(text(),'Save Changes')]",
                    confirmSaveChanges: ".swal2-confirm",
                },

            },
            //abuseReports
            abuseReports: {
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
                //filters
                filterByAbuseReason: "(//select[@id='filter-products']/..//select)[1]",
                filterByProduct: "#filter-products",
                filterByVendors: "#filter-vendors",
            },
            //storeReviews
            storeReviews: {
                //nav tabs
                all: "//ul[@class='subsubsub']//li//a[contains(text(),'All')]",
                trash: "//ul[@class='subsubsub']//li//a[contains(text(),'Trash')]",
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
                //filters
                filterByVendors: "#filter-vendors",
            },
            //storeSupport
            storeSupport: {
                //nav tabs
                open: "//ul[@class='subsubsub']//li//a[contains(text(),'Open')]",
                closed: "//ul[@class='subsubsub']//li//a[contains(text(),'Closed')]",
                all: "//ul[@class='subsubsub']//li//a[contains(text(),'All')]",
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
                //filters
                filterByVendors: "#select2-filter-vendors-container",
                filterByCustomers: "#select2-filter-customers-container",
            },
            //announcements
            announcements: {
                //nav tabs
                all: "//ul[@class='subsubsub']//li//a[contains(text(),'All')]",
                published: "//ul[@class='subsubsub']//li//a[contains(text(),'Published')]",
                pending: "//ul[@class='subsubsub']//li//a[contains(text(),'Pending')]",
                scheduled: "//ul[@class='subsubsub']//li//a[contains(text(),'Scheduled')]",
                draft: "//ul[@class='subsubsub']//li//a[contains(text(),'Draft')]",
                trash: "//ul[@class='subsubsub']//li//a[contains(text(),'Trash')]",
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
            },
            //refunds
            refunds: {
                //nav tabs
                pending: "//ul[@class='subsubsub']//li//a[contains(text(),'Pending')]",
                approved: "//ul[@class='subsubsub']//li//a[contains(text(),'Approved')]",
                cancelled: "//ul[@class='subsubsub']//li//a[contains(text(),'Cancelled')]",
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
                //search refund
                searchRefund: "#post-search-input",
                refundCell: (orderNumber) => `//strong[contains(text(),'#${orderNumber}')]/../..`,
                approveRefund: (orderNumber) => `//strong[contains(text(),'#${orderNumber}')]/../..//span[@class='completed']`,
                approveRefund: (orderNumber) => `//strong[contains(text(),'#${orderNumber}')]/../..//span[@class='completed']`,
                cancelRefund: (orderNumber) => `//strong[contains(text(),'#${orderNumber}')]/../..//span[@class='cancelled']`,

            },

            //reports
            reports: {
                //menus
                reports: "//a[contains(@class, 'nav-tab') and contains(text(),'Reports')]",
                allLogs: "//a[contains(@class, 'nav-tab') and contains(text(),'All Logs')]",

                //reports
                //by day
                byDay: "//ul[contains(@class, 'dokan-report-sub')]//a[contains(text(),'By Day')]",
                byDayFrom: "//label[contains(text(),'From')]/../input",
                byDayTo: "//label[contains(text(),'To')]/../input",
                byDayShow: "//label[contains(text(),'To')]/../button",
                //by year
                byYear: "//ul[contains(@class, 'dokan-report-sub')]//a[contains(text(),'By Year')]",
                byYearNumber: ".dokan-input",
                byYearShow: ".button",
                //by vendor
                byVendor: "//ul[contains(@class, 'dokan-report-sub')]//a[contains(text(),'By Vendor')]",
                storeName: ".multiselect__tags",
                byVendorFrom: "//label[contains(text(),'From')]/../input",
                byVendorTo: "//label[contains(text(),'To')]/../input",
                byVendorShow: ".button",

                //all logs
                //search
                searchByOrder: "#post-search-input",
                clearSearch: "//a[contains(text(),'Clear')]",
                exportLogs: "#export-all-logs",
                //filter
                filterByStore: "#select2-filter-vendors-container",
                filterByStoreValues: ".select2-results ul li",
                filterByStatus: "#select2-filter-status-container",
                filterByStatusValues: ".select2-results ul li",
                filterByDate: ".form-control",
                //order details
                orderId: ".column.order_id > a",
                store: ".column.vendor_id > a",
                orderTotal: ".column.order_total > div",
                vendorEarning: ".column.vendor_earning > div",
                commission: ".column.commission > div",
                gatewayFee: ".column.dokan_gateway_fee > div",
                shippingCost: ".column.shipping_total > div",
                tax: ".column.tax_total > div",
                orderStatus: "td.column.status",
                orderDate: "td.column.date ",
            },

            //modules
            modules: {
                //nav tabs
                active: "//li//a[contains(text(),'Active')]",
                inActive: "//li//a[contains(text(),'Inactive')]",
                //search box
                searchBox: ".search-box input",
                moduleActivationSwitch: ".switch.tips span",
                moduleCard: ".module-card",
                moduleCheckbox: ".module-checkbox input",
                //all module activation
                selectAllBulkAction: ".bulk-actions li input",
                activeAll: ".activate",
                deActivateAll: ".deactivate",
            },
            //tools
            tools: {
                reBuild: "//a[contains(text(),'Re-build')]",
                checkOrders: "//a[contains(text(),'Check Orders')]",
                openSetupWizard: "//a[contains(text(),'Open Setup Wizard')]",

            },
            //verifications
            verifications: {
                //nav tabs
                pending: "//ul[@class='subsubsub']//li//a[contains(text(),'Pending')]",
                approved: "//ul[@class='subsubsub']//li//a[contains(text(),'Approved')]",
                rejected: "//ul[@class='subsubsub']//li//a[contains(text(),'Rejected')]",
            },
            //advertising
            advertising: {
                //nav tabs
                all: "//ul[@class='subsubsub']//li//a[contains(text(),'All')]",
                active: "//ul[@class='subsubsub']//li//a[contains(text(),'Active')]",
                expired: "//ul[@class='subsubsub']//li//a[contains(text(),'Expired')]",
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
                //search
                search: "#post-search-input",
            },
            //wholesaleCustomer
            wholesaleCustomer: {
                //nav tabs
                all: "//ul[@class='subsubsub']//li//a[contains(text(),'All')]",
                active: "//ul[@class='subsubsub']//li//a[contains(text(),'Active')]",
                deActive: "//ul[@class='subsubsub']//li//a[contains(text(),'Deactive')]",
                //bulk actions
                bulkActions: "#bulk-action-selector-top",
                selectAllCheckbox: ".check-column input",
                //search
                search: "#post-search-input",
                statusSlider: (username) => `//td[contains(text(), '${username}')]/..//label[@class='switch tips']`,
                enableStatusUpdateSuccessMessage: '.notification-content'
            },
            //help
            help: {
                //divs
                basics: "//span[contains(text(), 'Basics')]/../../..",
                paymentsAndShipping: "//span[contains(text(), 'Payment and Shipping')]/../../..",
                vendorRelatedQuestions: "//span[contains(text(), 'Vendor Related Questions')]/../../..",
                miscellaneous: "//span[contains(text(), 'Miscellaneous')]/../../..",
            },

            //dokan settings
            settings: {
                //setting menus
                general: '//a[@class="nav-tab" and contains(text(),"General")]',
                sellingOptions: '//a[@class="nav-tab" and contains(text(),"Selling Options")]',
                withdrawOptions: '//a[@class="nav-tab" and contains(text(),"Withdraw Options")]',
                pageSettings: '//a[@class="nav-tab" and contains(text(),"Page Settings")]',
                appearance: '//a[@class="nav-tab" and contains(text(),"Appearance")]',
                privacyPolicy: '//a[@class="nav-tab" and contains(text(),"Privacy Policy")]',
                liveSearch: '//a[@class="nav-tab" and contains(text(),"Live Search")]',
                storeSupport: '//a[@class="nav-tab" and contains(text(),"Store Support")]',
                sellerVerification: '//a[@class="nav-tab" and contains(text(),"Seller Verification")]',
                verificationSmsGateways: '//a[@class="nav-tab" and contains(text(),"Verification SMS Gateways")]',
                emailVerification: '//a[@class="nav-tab" and contains(text(),"Email Verification")]',
                socialApi: '//a[@class="nav-tab" and contains(text(),"Social API")]',
                shippingStatus: '//a[@class="nav-tab" and contains(text(),"Shipping Status")]',
                colors: '//a[@class="nav-tab" and contains(text(),"Colors")]',
                liveChat: '//a[@class="nav-tab" and contains(text(),"Live Chat")]',
                rma: '//a[@class="nav-tab" and contains(text(),"RMA")]',
                wholesale: '//a[@class="nav-tab" and contains(text(),"Wholesale")]',
                euComplianceFields: '//a[@class="nav-tab" and contains(text(),"EU Compliance Fields")]',
                deliveryTime: '//a[@class="nav-tab" and contains(text(),"Delivery Time")]',
                productAdvertising: '//a[@class="nav-tab" and contains(text(),"Product Advertising")]',
                geolocation: '//a[@class="nav-tab" and contains(text(),"Geolocation")]',
                productReportAbuse: '//a[@class="nav-tab" and contains(text(),"Product Report Abuse")]',
                singleProductMultiVendor: '//a[@class="nav-tab" and contains(text(),"Single Product MultiVendor")]',
                vendorAnalytics: '//a[@class="nav-tab" and contains(text(),"Vendor Analytics")]',
                vendorSubscription: '//a[@class="nav-tab" and contains(text(),"Vendor Subscription")]',

                //general
                //site options
                adminAreaAccess: "#dokan_general\\[admin_access\\]",
                vendorStoreUrl: "#dokan_general\\[custom_store_url\\]",
                vendorSetupWizardLogo: "#dokan_general\\[setup_wizard_logo_url\\]",
                disableWelcomeWizard: "#dokan_general\\[disable_welcome_wizard\\]",
                sellingProductTypes: "#dokan_general\\[global_digital_mode\\]",
                logShipStationApiRequest: "#dokan_general\\[enable_shipstation_logging\\]",
                dataClear: "#dokan_general\\[data_clear_on_uninstall\\]",
                confirmDataClear: ".swal2-confirm",
                cancelDataClear: ".swal2-cancel",

                //vendor store options
                storeTermsAndConditions: "#dokan_general\\[seller_enable_terms_and_conditions\\]",
                storeProductPerPage: "#dokan_general\\[store_products_per_page\\]",
                enableTermsAndCondition: "#dokan_general\\[enable_tc_on_reg\\]",
                enableSingSellerMode: "#dokan_general\\[enable_single_seller_mode\\]",
                storCategory: "#dokan_general\\[store_category_type\\]",
                generalSaveChanges: "#submit",

                //selling options
                //commission
                commissionType: "#dokan_selling\\[commission_type\\]",
                adminCommission: "#dokan_selling\\[admin_percentage\\]",
                shippingFeeRecipient: "#dokan_selling\\[shipping_fee_recipient\\]",
                taxFeeRecipient: "#dokan_selling\\[tax_fee_recipient\\]",
                processRefundViaAPI: "#dokan_selling\\[automatic_process_api_refund\\]",

                //vendor capability
                newVendorProductUpload: "#dokan_selling\\[new_seller_enable_selling\\]",
                disableProductPopup: "#dokan_selling\\[disable_product_popup\\]",
                orderStatusChange: "#dokan_selling\\[order_status_change\\]",
                newProductStatus: "#dokan_selling\\[product_status\\]",
                duplicateProduct: "#dokan_selling\\[vendor_duplicate_product\\]",
                editedProductStatus: "#dokan_selling\\[edited_product_status\\]",
                productMailNotification: "#dokan_selling\\[product_add_mail\\]",
                productCategorySelection: "#dokan_selling\\[product_category_style\\]",
                vendorsCanCreateTags: "#dokan_selling\\[product_vendors_can_create_tags\\]",
                discountEditingAllowVendorToAddDiscountOnProduct: "#dokan_selling\\[discount_edit\\]\\[product-discount\\]",
                discountEditingAllowVendorToAddDiscountOnOrder: "#dokan_selling\\[discount_edit\\]\\[order-discount\\]",
                hideCustomerInfo: "#dokan_selling\\[hide_customer_info\\]",
                vendorProductReview: "#dokan_selling\\[seller_review_manage\\]",
                guestProductEnquiry: "#dokan_selling\\[enable_guest_user_enquiry\\]",
                newVendorEnableAuction: "#dokan_selling\\[new_seller_enable_auction\\]",
                enableMinMaxQuantities: "#dokan_selling\\[enable_min_max_quantity\\]",
                enableMinMaxAmount: "#dokan_selling\\[enable_min_max_amount\\]",
                disableShipping: "#dokan_selling\\[disable_shipping_tab\\]",
                sellingOptionsSaveChanges: "#submit",

                //withdraw options
                withdrawMethodsPaypal: "#dokan_withdraw\\[withdraw_methods\\]\\[paypal\\]",
                withdrawMethodsBankTransfer: "#dokan_withdraw\\[withdraw_methods\\]\\[bank\\]",
                withdrawMethodsWirecard: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan-moip-connect\\]",
                withdrawMethodsPaypalMarketplace: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan-paypal-marketplace\\]",
                withdrawMethodsDokanCustom: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_custom\\]",
                withdrawMethodsRazorpay: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_razorpay\\]",
                withdrawMethodsMangoPay: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_mangopay\\]",
                withdrawMethodsStripe: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan-stripe-connect\\]",
                withdrawMethodsStripeExpress: "#dokan_withdraw\\[withdraw_methods\\]\\[dokan_stripe_express\\]",
                withdrawMethodsSkrill: "#dokan_withdraw\\[withdraw_methods\\]\\[skrill\\]",
                customMethodName: "#dokan_withdraw\\[withdraw_method_name\\]",
                customMethodType: "#dokan_withdraw\\[withdraw_method_type\\]",
                minimumWithdrawAmount: "#dokan_withdraw\\[withdraw_limit\\]",
                orderStatusForWithdrawCompleted: "#dokan_withdraw\\[withdraw_order_status\\]\\[wc-completed\\]",
                orderStatusForWithdrawProcessing: "#dokan_withdraw\\[withdraw_order_status\\]\\[wc-processing\\]",
                orderStatusForWithdrawOnHold: "#dokan_withdraw\\[withdraw_order_status\\]\\[wc-on-hold\\]",
                excludeCodPayments: "#dokan_withdraw\\[exclude_cod_payment\\]",
                withdrawThreshold: "#dokan_withdraw\\[withdraw_date_limit\\]",
                hideWithdrawOption: "#dokan_withdraw\\[hide_withdraw_option\\]",
                //disbursement schedule settings
                withdrawDisbursementManual: "#dokan_withdraw\\[disbursement\\]\\[manual\\]",
                withdrawDisbursementAuto: "#dokan_withdraw\\[disbursement\\]\\[schedule\\]",
                disburseMentQuarterlySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[quarterly\\]",
                disburseMentMonthlySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[monthly\\]",
                disburseMentBiweeklySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[biweekly\\]",
                disburseMentWeeklySchedule: "#dokan_withdraw\\[disbursement_schedule\\]\\[weekly\\]",
                quarterlyScheduleMonth: "select[name='dokan_withdraw[quarterly_schedule][month]']",
                quarterlyScheduleWeek: "select[name='dokan_withdraw[quarterly_schedule][week]']",
                quarterlyScheduleDay: "select[name='dokan_withdraw[quarterly_schedule][days]']",
                monthlyScheduleWeek: "select[name='dokan_withdraw[monthly_schedule][week]']",
                monthlyScheduleDay: "select[name='dokan_withdraw[monthly_schedule][days]']",
                biweeklyScheduleWeek: "select[name='dokan_withdraw[biweekly_schedule][week]']",
                biweeklyScheduleDay: "select[name='dokan_withdraw[biweekly_schedule][days]']",
                weeklyScheduleDay: "select[name='dokan_withdraw[weekly_schedule]']",
                withdrawSaveChanges: "#submit",

                //page settings
                dashboard: "#dokan_pages\\[dashboard\\]",
                myOrders: "#dokan_pages\\[my_orders\\]",
                storeListing: "#dokan_pages\\[store_listing\\]",
                termsAndConditionsPage: "#dokan_pages\\[reg_tc_page\\]",
                pageSaveChanges: "#submit",

                //appearance
                showMapOnStorePage: "#dokan_appearance\\[store_map\\]",
                mapApiSourceGoogleMaps: "#dokan_appearance\\[map_api_source\\]\\[google_maps\\]",
                mapApiSourceMapBox: "#dokan_appearance\\[map_api_source\\]\\[mapbox\\]",
                googleMapApiKey: "#dokan_appearance\\[gmap_api_key\\]",
                mapBoxAccessToken: "#dokan_appearance\\[mapbox_access_token\\]",
                googleReCAPTCHAValidationSiteKey: "#dokan_appearance\\[recaptcha_site_key\\]",
                googleReCAPTCHAValidationSecretKey: "#dokan_appearance\\[recaptcha_secret_key\\]",
                showContactFormOnStorePage: "#dokan_appearance\\[contact_seller\\]",
                storeHeaderTemplate1: ".radio-image:nth-child(1) .button",
                storeHeaderTemplate2: ".radio-image:nth-child(2) .button",
                storeHeaderTemplate3: ".radio-image:nth-child(3) .button",
                storeHeaderTemplate4: ".radio-image:nth-child(4) .button",
                storeBannerWidth: "#dokan_appearance\\[store_banner_width\\]",
                storeBannerHeight: "#dokan_appearance\\[store_banner_height\\]",
                storeOpeningClosingTimeWidget: "#dokan_appearance\\[store_open_close\\]",
                enableStoreSidebarFromTheme: "#dokan_appearance\\[enable_theme_store_sidebar\\]",
                showVendorInfo: "#dokan_appearance\\[show_vendor_info\\]",
                hideVendorInfoEmailAddress: "#dokan_appearance\\[hide_vendor_info\\]\\[email\\]",
                hideVendorInfoPhoneNumber: "#dokan_appearance\\[hide_vendor_info\\]\\[phone\\]",
                hideVendorInfoStoreAddress: "#dokan_appearance\\[hide_vendor_info\\]\\[address\\]",
                appearanceSaveChanges: "#submit",

                //privacy policy
                enablePrivacyPolicy: "#dokan_privacy\\[enable_privacy\\]",
                privacyPage: "#dokan_privacy\\[privacy_page\\]",
                privacyPolicyMessage: "#dokan_privacy\\[privacy_policy\\]",
                privacyPolicySaveChanges: "#submit",

                //live search
                liveSearchOptions: "#dokan_live_search_setting\\[live_search_option\\]",
                liveSearchSaveChanges: "#submit",

                //store support
                displayOnOrderDetails: "#dokan_store_support_setting\\[enabled_for_customer_order\\]",
                displayOnSingleProductPage: "#dokan_store_support_setting\\[store_support_product_page\\]",
                supportButtonLabel: "#dokan_store_support_setting\\[support_button_label\\]",
                storeSupportSaveChanges: "#submit",

                //seller verification
                //facebook
                appId: "#dokan_verification\\[fb_app_id\\]",
                appSecret: "#dokan_verification\\[fb_app_secret\\]",
                //twitter
                consumerKey: "#dokan_verification\\[twitter_app_id\\]",
                consumerSecret: "#dokan_verification\\[twitter_app_secret\\]",
                //google
                googleClientId: "#dokan_verification\\[google_app_id\\]",
                googleClientSecret: "#dokan_verification\\[google_app_secret\\]",
                //linkedin
                linkedinClientId: "#dokan_verification\\[linkedin_app_id\\]",
                linkedinClientSecret: "#dokan_verification\\[linkedin_app_secret\\]",


                //verification sms gateways
                senderName: "#dokan_verification_sms_gateways\\[sender_name\\]",
                smsText: "#dokan_verification_sms_gateways\\[sms_text\\]",
                smsSentSuccess: "#dokan_verification_sms_gateways\\[sms_sent_msg\\]",
                smsSentError: "#dokan_verification_sms_gateways\\[sms_sent_error\\]",
                activeGateway: "#dokan_verification_sms_gateways\\[active_gateway\\]",
                //nexmo
                apiKey: "#dokan_verification_sms_gateways\\[nexmo_username\\]",
                apiSecret: "#dokan_verification_sms_gateways\\[nexmo_pass\\]",

                //email verification
                enableEmailVerification: "#dokan_email_verification\\[enabled\\]",
                registrationNotice: "#dokan_email_verification\\[registration_notice\\]",
                loginNotice: "#dokan_email_verification\\[login_notice\\]",
                emailVerificationSaveChanges: "#submit",

                //social api
                enableSocialLogin: "#dokan_social_api\\[enabled\\]",

                //shipping status
                allowShipmentTracking: "#dokan_shipping_status_setting\\[enabled\\]",
                //shipping providers
                australiaPost: "#dokan_shipping_status_setting\\[shipping_status_provider\\]\\[sp-australia-post\\]",
                canadaPost: "#dokan_shipping_status_setting\\[shipping_status_provider\\]\\[sp-canada-post\\]",
                customShippingStatusInput: ".regular-text",
                customShippingStatusAdd: ".dokan-repetable-add-item-btn",
                shippingStatusSaveChanges: "#submit",

                //colors
                buttonTextColor: ".btn_text span",
                buttonBackgroundColor: ".btn_primary span",
                buttonBorderColor: ".btn_primary_border span",
                buttonHoverTextColor: ".btn_hover_text span",
                buttonHoverColor: ".btn_hover span",
                buttonHoverBorderColor: ".btn_hover_border span",
                dashboardNavigationText: ".dash_nav_text span",
                dashboardNavigationActiveMenu: ".dash_active_link span",
                dashboardNavigationBackground: ".dash_nav_bg span",
                dashboardMenuBorder: ".dash_nav_border span",

                //live chat
                enableLiveChat: "#dokan_live_chat\\[enable\\]",
                chatProviderFacebookMessenger: "#dokan_live_chat\\[provider\\]\\[messenger\\]",
                chatProviderTalkJs: "#dokan_live_chat\\[provider\\]\\[talkjs\\]",
                chatProviderTawkTo: "#dokan_live_chat\\[provider\\]\\[tawkto\\]",
                chatProviderWhatsApp: "#dokan_live_chat\\[provider\\]\\[whatsapp\\]",
                //fb
                messengerColor: ".button > span",
                //talkJs
                appId: "#dokan_live_chat\\[app_id\\]",
                appSecret: "#dokan_live_chat\\[app_secret\\]",
                //whatsapp
                openingPattern: "#dokan_live_chat\\[wa_opening_method\\]",
                preFilledMessage: "#dokan_live_chat\\[wa_pre_filled_message\\]",
                //chat button
                chatButtonOnVendorPage: "#dokan_live_chat\\[chat_button_seller_page\\]",
                chatButtonOnProductPage: "#dokan_live_chat\\[chat_button_product_page\\]",
                liveChatSaveChanges: "#submit",

                //rma
                orderStatus: "#dokan_rma\\[rma_order_status\\]",
                enableRefundRequests: "#dokan_rma\\[rma_enable_refund_request\\]",
                enableCouponRequests: "#dokan_rma\\[rma_enable_coupon_request\\]",
                reasonsForRmaSingle: (reason) => `//li[contains(text(),'${reason}')]//span[@class="dashicons dashicons-no-alt remove-item"]`,
                reasonsForRma: ".remove-item",
                reasonsForRmaInput: ".regular-text",
                reasonsForRmaAdd: ".dokan-repetable-add-item-btn",
                refundPolicyIframe: 'iframe',
                refundPolicyHtmlBody: '#tinymce',

                rmaSaveChanges: "#submit",

                //wholesale
                whoCanSeeWholesalePriceAllUsers: "#dokan_wholesale\\[wholesale_price_display\\]\\[all_user\\]",
                whoCanSeeWholesalePriceWholesaleCustomer: "#dokan_wholesale\\[wholesale_price_display\\]\\[wholesale_customer\\]",
                showWholesalePriceOnShopArchive: "#dokan_wholesale\\[display_price_in_shop_archieve\\]",
                needApprovalForCustomer: "#dokan_wholesale\\[need_approval_for_wholesale_customer\\]",
                wholesaleSaveChanges: "#submit",

                //eu compliance fields
                vendorExtraFieldsCompanyName: "#dokan_germanized\\[vendor_fields\\]\\[dokan_company_name\\]",
                vendorExtraFieldsCompanyIdOrEuidNumber: "#dokan_germanized\\[vendor_fields\\]\\[dokan_company_id_number\\]",
                vendorExtraFieldsVatOrTaxNumber: "#dokan_germanized\\[vendor_fields\\]\\[dokan_vat_number\\]",
                vendorExtraFieldsNameOfBank: "#dokan_germanized\\[vendor_fields\\]\\[dokan_bank_name\\]",
                vendorExtraFieldsBankIban: "#dokan_germanized\\[vendor_fields\\]\\[dokan_bank_iban\\]",
                displayInVendorRegistrationForm: "#dokan_germanized\\[vendor_registration\\]",
                customerExtraFieldsCompanyIdOrEuidNumber: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_company_id_number\\]",
                customerExtraFieldsVatOrTaxNumber: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_vat_number\\]",
                customerExtraFieldsNameOfBank: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_bank_name\\]",
                customerExtraFieldsBankIban: "#dokan_germanized\\[customer_fields\\]\\[billing_dokan_bank_iban\\]",
                enableGermanizedSupportForVendors: "#dokan_germanized\\[enabled_germanized\\]",
                vendorsWillBeAbleToOverrideInvoiceNumber: "#dokan_germanized\\[override_invoice_number\\]",
                euComplianceFieldsSaveChanges: "#submit",

                //delivery time
                allowVendorSettings: "#dokan_delivery_time\\[allow_vendor_override_settings\\]",
                deliveryDateLabel: "#dokan_delivery_time\\[delivery_date_label\\]",
                deliveryBlockedBuffer: "#dokan_delivery_time\\[preorder_date\\]",
                deliveryBoxInfo: "#dokan_delivery_time\\[delivery_box_info\\]",
                requireDeliveryDateAndTime: "#dokan_delivery_time\\[selection_required\\]",
                deliveryDaySunday: "#dokan_delivery_time\\[delivery_day\\]\\[sunday\\]",
                deliveryDayMonday: "#dokan_delivery_time\\[delivery_day\\]\\[monday\\]",
                deliveryDayTuesday: "#dokan_delivery_time\\[delivery_day\\]\\[tuesday\\]",
                deliveryDayWednesday: "#dokan_delivery_time\\[delivery_day\\]\\[wednesday\\]",
                deliveryDayThursday: "#dokan_delivery_time\\[delivery_day\\]\\[thursday\\]",
                deliveryDayFriday: "#dokan_delivery_time\\[delivery_day\\]\\[friday\\]",
                deliveryDaySaturday: "#dokan_delivery_time\\[delivery_day\\]\\[saturday\\]",
                openingTime: "#dokan_delivery_time\\[opening_time\\]",
                closingTime: "#dokan_delivery_time\\[closing_time\\]",
                timeSlot: "#dokan_delivery_time\\[time_slot_minutes\\]",
                orderPerSlot: "#dokan_delivery_time\\[order_per_slot\\]",
                deliveryTimeSaveChanges: "#submit",

                //product advertising
                noOfAvailableSlot: "#dokan_product_advertisement\\[total_available_slot\\]",
                expireAfterDays: "#dokan_product_advertisement\\[expire_after_days\\]",
                vendorCanPurchaseAdvertisement: "#dokan_product_advertisement\\[per_product_enabled\\]",
                advertisementCostUsd: "#dokan_product_advertisement\\[cost\\]",
                enableAdvertisementInSubscription: "#dokan_product_advertisement\\[vendor_subscription_enabled\\]",
                markAdvertisedProductAsFeatured: "#dokan_product_advertisement\\[featured\\]",
                displayAdvertisedProductOnTop: "#dokan_product_advertisement\\[catalog_priority\\]",
                outOfStockVisibility: "#dokan_product_advertisement\\[hide_out_of_stock_items\\]",
                productAdvertisingSaveChanges: "#submit",

                //geolocation
                locationMapPosition: "#dokan_geolocation\\[show_locations_map\\]",
                showMap: "#dokan_geolocation\\[show_location_map_pages\\]",
                showFiltersBeforeLocationMap: "#dokan_geolocation\\[show_filters_before_locations_map\\]",
                productLocationTab: "#dokan_geolocation\\[show_product_location_in_wc_tab\\]",
                radiusSearchUnit: "#dokan_geolocation\\[distance_unit\\]",
                radiusSearchMinimumDistance: "#dokan_geolocation\\[distance_min\\]",
                radiusSearchMaximumDistance: "#dokan_geolocation\\[distance_max\\]",
                mapZoomLevel: "#dokan_geolocation\\[map_zoom\\]",
                defaultLocation: ".search-address",
                geolocationSaveChanges: "#submit",

                //product report abuse
                reportedBy: "#dokan_report_abuse\\[reported_by_logged_in_users_only\\]",
                reasonsForAbuseReportList: ".dokan-settings-repeatable-list li",
                reasonsForAbuseReportSingle: (reason) => `//li[contains(text(),'${reason}')]//span[@class="dashicons dashicons-no-alt remove-item"]`,
                reasonsForAbuseReportInput: ".regular-text",
                reasonsForAbuseReportAdd: ".dokan-repetable-add-item-btn",
                productReportAbuseSaveChanges: "#submit",

                //single product multi vendor
                enableSingleProductMultipleVendor: "#dokan_spmv\\[enable_pricing\\]",
                sellItemButtonText: "#dokan_spmv\\[sell_item_btn\\]",
                availableVendorDisplayAreaTitle: "#dokan_spmv\\[available_vendor_list_title\\]",
                availableVendorSectionDisplayPosition: "#dokan_spmv\\[available_vendor_list_position\\]",
                showSpmvProducts: "#dokan_spmv\\[show_order\\]",
                singleProductMultiVendorSaveChanges: "#submit",

                //vendor analytics
                vendorAnalyticsSaveChanges: "#submit",

                //vendor subscription
                subscription: "#dokan_product_subscription\\[subscription_pack\\]",
                enableProductSubscription: "#dokan_product_subscription\\[enable_pricing\\]",
                enableSubscriptionInRegistrationForm: "#dokan_product_subscription\\[enable_subscription_pack_in_reg\\]",
                enableEmailNotification: "#dokan_product_subscription\\[notify_by_email\\]",
                noOfDays: "#dokan_product_subscription\\[no_of_days_before_mail\\]",
                productStatus: "#dokan_product_subscription\\[product_status_after_end\\]",
                cancellingEmailSubject: "#dokan_product_subscription\\[cancelling_email_subject\\]",
                cancellingEmailBody: "#dokan_product_subscription\\[cancelling_email_body\\]",
                alertEmailSubject: "#dokan_product_subscription\\[alert_email_subject\\]",
                alertEmailBody: "#dokan_product_subscription\\[alert_email_body\\]",
                vendorSubscriptionSaveChanges: "#submit",

                // update Settings
                dokanUpdateSuccessMessage: '#setting-message_updated > p > strong',
            },

            //license
            license: {
                activateLicense: "//button[contains(text(),'Activate License')]",
            }
        },

        //woocommerce
        wooCommerce: {
            //woocommerce menu
            settingsMenu: "//li[contains(@class,'toplevel_page_woocommerce')]//a[text()='Settings']",

            //woocommerce settings
            settings: {
                //settings menu
                general: '//a[contains(@class,"nav-tab") and text()="General"]',
                products: '//a[contains(@class,"nav-tab") and text()="Products"]',
                tax: '//a[contains(@class,"nav-tab") and text()="Tax"]',
                shipping: '//a[contains(@class,"nav-tab") and text()="Shipping"]',
                payments: '//a[contains(@class,"nav-tab") and text()="Payments"]',
                accounts: "//a[contains(text(),'Accounts & Privacy')]",

                //general
                //store address
                addressLine1: "#woocommerce_store_address",
                addressLine2: "#woocommerce_store_address_2",
                city: "#woocommerce_store_city",
                countryOrState: "#select2-woocommerce_default_country-g1-container",
                PostcodeOrZip: "#woocommerce_store_postcode",
                //general options
                sellingLocation: "#select2-woocommerce_allowed_countries-container",
                shippingLocation: "#select2-woocommerce_ship_to_countries-container",
                defaultCustomerLocation: "#select2-woocommerce_default_customer_address-container",
                enableTaxes: "#woocommerce_calc_taxes",
                enableShipping: '#select2-woocommerce_ship_to_countries-container',
                enableShippingValues: '.select2-results ul li',
                enableCoupon: "#woocommerce_enable_coupons",
                calculateCouponDiscountsSequentially: "#woocommerce_calc_discounts_sequentially",
                //currency options
                currency: "#select2-woocommerce_currency-container",
                currencyPosition: "#select2-woocommerce_currency_pos-container",
                currencyPositionValues: ".select2-results ul li",
                thousandSeparator: "#woocommerce_price_thousand_sep",
                decimalSeparator: "#woocommerce_price_decimal_sep",
                numberOfDecimals: "#woocommerce_price_num_decimals",
                generalSaveChanges: ".woocommerce-save-button",

                //tax
                //tax menus
                taxOptions: "//ul[@class='subsubsub']//a[contains(text(),'Tax options')]",
                standardRates: "//ul[@class='subsubsub']//a[contains(text(),'Standard rates')]",
                reducedRateRates: "//ul[@class='subsubsub']//a[contains(text(),'Reduced rate rates')]",
                zeroRateRates: "//ul[@class='subsubsub']//a[contains(text(),'Zero rate rates')]",

                //tax options
                pricesEnteredWithTaxPricesInclusiveOfTax: "//label[contains(text(),'Yes, I will enter prices inclusive of tax')]//input[@name='woocommerce_prices_include_tax']",
                pricesEnteredWithTaxPricesExclusiveOfTax: "//label[contains(text(),'No, I will enter prices exclusive of tax')]//input[@name='woocommerce_prices_include_tax']",
                calculateTaxBasedOn: "#select2-woocommerce_tax_based_on-container",
                shippingTaxClass: "#select2-woocommerce_shipping_tax_class-container",
                rounding: "#woocommerce_tax_round_at_subtotal",
                additionalTaxClasses: "#woocommerce_tax_classes",
                displayPricesInTheShop: "#select2-woocommerce_tax_display_shop-container",
                displayPricesDuringCartAndCheckout: "#select2-woocommerce_tax_display_cart-container",
                priceDisplaySuffix: "#woocommerce_price_display_suffix",
                displayTaxTotals: "#select2-woocommerce_tax_total_display-container",
                taxSaveChanges: ".woocommerce-save-button",

                //add tax
                taxTable: ".wc_tax_rates",
                insertRow: ".plus",
                taxRate: ".rate input",
                taxRateSaveChanges: ".woocommerce-save-button",

                //shipping
                addShippingZone: ".page-title-action",
                zoneName: "#zone_name",
                // zoneRegions: ".select2-search__field",
                zoneRegions: "#zone_locations",
                shippingZoneCell: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..`,
                editShippingZone: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..//div//a[contains(text(), 'Edit')]`,
                deleteShippingZone: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..//div//a[contains(text(), 'Delete')]`,
                addShippingMethods: ".wc-shipping-zone-add-method",
                shippingMethod: ".wc-shipping-zone-method-selector select",
                addShippingMethod: "#btn-ok",
                shippingMethodCell: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]/..`,
                editShippingMethod: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]/..//div//a[contains(text(), 'Edit')]`,
                deleteShippingMethod: (shippingMethodName) => `//a[contains(text(),'${shippingMethodName}')]/..//div//a[contains(text(), 'Delete')]`,

                //edit shipping methods
                //flat rate
                flatRateMethodTitle: "#woocommerce_flat_rate_title",
                flatRateTaxStatus: "#woocommerce_flat_rate_tax_status",
                flatRateCost: "#woocommerce_flat_rate_cost",
                //free shipping
                freeShippingTitle: "#woocommerce_free_shipping_title",
                freeShippingRequires: "#woocommerce_free_shipping_requires",
                freeShippingMinimumOrderAmount: "#woocommerce_free_shipping_min_amount",
                freeShippingCouponsDiscounts: "#woocommerce_free_shipping_ignore_discounts",
                //local pickup
                localPickupTitle: "#woocommerce_local_pickup_title",
                localPickupTaxStatus: "#woocommerce_local_pickup_tax_status",
                localPickupCost: "#woocommerce_local_pickup_cost",
                //dokan table rate shipping
                dokanTableRateShippingMethodTitle: "#woocommerce_dokan_table_rate_shipping_title",
                //dokan distance rate shipping
                dokanDistanceRateShippingMethodTitle: "#woocommerce_dokan_distance_rate_shipping_title",
                //vendor shipping
                vendorShippingMethodTitle: "#woocommerce_dokan_vendor_shipping_title",
                vendorShippingTaxStatus: "#woocommerce_dokan_vendor_shipping_tax_status",

                //shipping method save changes
                shippingMethodSaveChanges: "#btn-ok",
                //shipping zone save changes
                shippingZoneSaveChanges: ".button.wc-shipping-zone-method-save",

                //payments
                //enable methods
                enableDirectBankTransfer: "//a[contains(text(),'Direct bank transfer')]/../..//span",
                enableCheckPayments: "//a[contains(text(),'Check payments')]/../..//span",
                enableCashOnDelivery: "//a[contains(text(),'Cash on delivery')]/../..//span",
                enableDokanWirecardConnect: "//a[contains(text(),'Dokan Wirecard Connect')]/../..//td[@class='status']//span",
                enableDokanPayPalAdaptivePayments: "//a[contains(text(),'Dokan PayPal Adaptive Payments')]/../..//td[@class='status']//span",
                enableDokanPayPalMarketplace: "//a[contains(text(),'Dokan PayPal Marketplace')]/../..//td[@class='status']//span",
                enableDokanStripeConnect: "//a[contains(text(),'Dokan Stripe Connect')]/../..//td[@class='status']//span",
                enableDokanMangoPay: "//a[contains(text(),'Dokan MangoPay')]/../..//td[@class='status']//span",
                enableDokanRazorpay: "//a[contains(text(),'Dokan Razorpay')]/../..//td[@class='status']//span",
                enableDokanStripeExpress: "//a[contains(text(),'Dokan Stripe Express')]/../..//td[@class='status']//span",
                // setup or manage payment methods
                setupDirectBankTransfer: "//a[contains(text(),'Direct bank transfer')]/../..//td[@class='action']//a",
                setupCheckPayments: "//a[contains(text(),'Check payments')]/../..//td[@class='action']//a",
                setupCashOnDelivery: "//a[contains(text(),'Cash on delivery')]/../..//td[@class='action']//a",
                setupDokanWirecardConnect: "//a[contains(text(),'Dokan Wirecard Connect')]/../..//td[@class='action']//a",
                setupDokanPayPalAdaptivePayments: "//a[contains(text(),'Dokan PayPal Adaptive Payments')]/../..//td[@class='action']//a",
                setupDokanPayPalMarketplace: "//a[contains(text(),'Dokan PayPal Marketplace')]/../..//td[@class='action']//a",
                setupDokanStripeConnect: "//a[contains(text(),'Dokan Stripe Connect')]/../..//td[@class='action']//a",
                setupDokanMangoPay: "//a[contains(text(),'Dokan MangoPay')]/../..//td[@class='action']//a",
                setupDokanRazorpay: "//a[contains(text(),'Dokan Razorpay')]/../..//td[@class='action']//a",
                setupDokanStripeExpress: "//a[contains(text(),'Dokan Stripe Express')]/../..//td[@class='action']//a",
                paymentMethodsSaveChanges: ".woocommerce-save-button",

                //stripe
                stripe: {
                    //stripe connect
                    enableDisableStripe: "#woocommerce_dokan-stripe-connect_enabled",
                    title: "#woocommerce_dokan-stripe-connect_title",
                    description: "#woocommerce_dokan-stripe-connect_description",
                    nonConnectedSellers: "#woocommerce_dokan-stripe-connect_allow_non_connected_sellers",
                    displayNoticeToConnectSeller: "#woocommerce_dokan-stripe-connect_display_notice_to_non_connected_sellers",
                    displayNoticeInterval: "#woocommerce_dokan-stripe-connect_display_notice_interval",
                    threeDSecureAndSca: "#woocommerce_dokan-stripe-connect_enable_3d_secure",
                    sellerPaysTheProcessingFeeIn3DsMode: "#woocommerce_dokan-stripe-connect_seller_pays_the_processing_fee",
                    testMode: "#woocommerce_dokan-stripe-connect_testmode",
                    stripeCheckout: "#woocommerce_dokan-stripe-connect_stripe_checkout",
                    stripeCheckoutLocale: "#select2-woocommerce_dokan-stripe-connect_stripe_checkout_locale-container",
                    checkoutImage: "#woocommerce_dokan-stripe-connect_stripe_checkout_image",
                    checkoutButtonLabel: "#woocommerce_dokan-stripe-connect_stripe_checkout_label",
                    savedCards: "#woocommerce_dokan-stripe-connect_saved_cards",
                    //test credentials
                    testPublishableKey: "#woocommerce_dokan-stripe-connect_test_publishable_key",
                    testSecretKey: "#woocommerce_dokan-stripe-connect_test_secret_key",
                    testClientId: "#woocommerce_dokan-stripe-connect_test_client_id",
                    stripeSaveChanges: ".woocommerce-save-button",
                },

                //paypal marketplace
                paypalMarketPlace: {
                    enableDisablePayPalMarketplace: "#woocommerce_dokan_paypal_marketplace_enabled",
                    title: "#woocommerce_dokan_paypal_marketplace_title",
                    description: "#woocommerce_dokan_paypal_marketplace_description",
                    payPalMerchantIdPartnerId: "#woocommerce_dokan_paypal_marketplace_partner_id",
                    // api credentials
                    payPalSandbox: "#woocommerce_dokan_paypal_marketplace_test_mode",
                    sandboxClientId: "#woocommerce_dokan_paypal_marketplace_test_app_user",
                    sandBoxClientSecret: "#woocommerce_dokan_paypal_marketplace_test_app_pass",
                    payPalPartnerAttributionId: "#woocommerce_dokan_paypal_marketplace_bn_code",
                    disbursementMode: "#select2-woocommerce_dokan_paypal_marketplace_disbursement_mode-container",
                    disbursementModeValues: ".select2-results ul li",
                    paymentButtonType: "#select2-woocommerce_dokan_paypal_marketplace_button_type-container",
                    paymentButtonTypeValues: ".select2-results ul li",
                    allowUnbrandedCreditCard: "#woocommerce_dokan_paypal_marketplace_ucc_mode",
                    marketplaceLogo: "#woocommerce_dokan_paypal_marketplace_marketplace_logo",
                    displayNoticeToConnectSeller: "#woocommerce_dokan_paypal_marketplace_display_notice_on_vendor_dashboard",
                    sendAnnouncementToConnectSeller: "#woocommerce_dokan_paypal_marketplace_display_notice_to_non_connected_sellers",
                    sendAnnouncementInterval: "#woocommerce_dokan_paypal_marketplace_display_notice_interval",
                    paypalMarketPlaceSaveChanges: ".woocommerce-save-button",
                },

                //dokan mangopay
                dokanMangoPay: {
                    enableDisableMangoPayPayment: "#woocommerce_dokan_mangopay_enabled",
                    title: "#woocommerce_dokan_mangopay_title",
                    description: "#woocommerce_dokan_mangopay_description",
                    //api credentials
                    mangoPaySandbox: "#woocommerce_dokan_mangopay_sandbox_mode",
                    sandboxClientId: "#woocommerce_dokan_mangopay_sandbox_client_id",
                    sandBoxApiKey: "#woocommerce_dokan_mangopay_sandbox_api_key",
                    //payment options
                    chooseAvailableCreditCards: '//label[contains(text(),"Choose Available Credit Cards ")]/../..//input[@class="select2-search__field"]',
                    chooseAvailableCreditCardsValues: ".select2-results ul li",
                    chooseAvailableDirectPaymentServices: '//label[contains(text(),"Choose Available Direct Payment Services")]/../..//input[@class="select2-search__field"]',
                    chooseAvailableDirectPaymentServicesValues: ".select2-results ul li",
                    savedCards: "#woocommerce_dokan_mangopay_saved_cards",
                    threeDs2: "#woocommerce_dokan_mangopay_disabled_3DS2",
                    //Fund Transfers and Payouts
                    transferFunds: "#select2-woocommerce_dokan_mangopay_disburse_mode-container",
                    transferFundsValues: ".select2-results ul li",
                    payoutMode: "#woocommerce_dokan_mangopay_instant_payout",
                    //types and Requirements of Vendors
                    typeOfVendors: "#select2-woocommerce_dokan_mangopay_default_vendor_status-container",
                    typeOfVendorsValues: ".select2-results ul li",
                    businessRequirement: "#select2-woocommerce_dokan_mangopay_default_business_type-container",
                    businessRequirementValues: ".select2-results ul li",
                    //advanced settings
                    displayNoticeToNonConnectedSellers: "#woocommerce_dokan_mangopay_notice_on_vendor_dashboard",
                    sendAnnouncementToNonConnectedSellers: "#woocommerce_dokan_mangopay_announcement_to_sellers",
                    announcementInterval: "#woocommerce_dokan_mangopay_notice_interval",
                    dokanMangopaySaveChanges: ".woocommerce-save-button",
                },

                dokanRazorpay: {
                    enableDisableDokanRazorpay: "#woocommerce_dokan_razorpay_enabled",
                    title: "#woocommerce_dokan_razorpay_title",
                    description: "#woocommerce_dokan_razorpay_description",
                    //api credentials
                    razorpaySandbox: "#woocommerce_dokan_razorpay_test_mode",
                    testKeyId: "#woocommerce_dokan_razorpay_test_key_id",
                    testKeySecret: "#woocommerce_dokan_razorpay_test_key_secret",
                    disbursementMode: "#select2-woocommerce_dokan_razorpay_disbursement_mode-container",
                    disbursementModeValues: ".select2-results ul li",
                    sellerPaysTheProcessingFee: "#woocommerce_dokan_razorpay_seller_pays_the_processing_fee",
                    displayNoticeToConnectSeller: "#woocommerce_dokan_razorpay_display_notice_on_vendor_dashboard",
                    sendAnnouncementToConnectSeller: "#woocommerce_dokan_razorpay_display_notice_to_non_connected_sellers",
                    sendAnnouncementInterval: "#woocommerce_dokan_razorpay_display_notice_interval",
                    dokanRazorpaySaveChanges: ".woocommerce-save-button",
                },

                stripeExpress: {
                    //stripe express
                    enableOrDisableStripeExpress: "#woocommerce_dokan_stripe_express_enabled",
                    title: "#woocommerce_dokan_stripe_express_title",
                    description: "#woocommerce_dokan_stripe_express_description",
                    //api credentials
                    testMode: "#woocommerce_dokan_stripe_express_testmode",
                    testPublishableKey: "#woocommerce_dokan_stripe_express_test_publishable_key",
                    testSecretKey: "#woocommerce_dokan_stripe_express_test_secret_key",
                    testWebhookSecret: "#woocommerce_dokan_stripe_express_test_webhook_key",
                    //payment and disbursement
                    choosePaymentMethods: "//select[@id='woocommerce_dokan_stripe_express_enabled_payment_methods']/..//span[@class='select2-selection select2-selection--multiple']",
                    choosePaymentMethodsValues: ".select2-results ul li",
                    takeProcessingFeesFromSellers: "#woocommerce_dokan_stripe_express_sellers_pay_processing_fee",
                    savedCards: "#woocommerce_dokan_stripe_express_saved_cards",
                    capturePaymentsManually: "#woocommerce_dokan_stripe_express_capture",
                    disburseFunds: "#select2-woocommerce_dokan_stripe_express_disburse_mode-container",
                    disbursementModeValues: ".select2-results ul li",
                    customerBankStatement: "#woocommerce_dokan_stripe_express_statement_descriptor",
                    //payment request options (Apple Pay / Google Pay)
                    paymentRequestButtons: "#woocommerce_dokan_stripe_express_payment_request",
                    buttonType: "#woocommerce_dokan_stripe_express_payment_request_button_type",
                    buttonTheme: "#woocommerce_dokan_stripe_express_payment_request_button_theme",
                    buttonLocations: "//select[@id='woocommerce_dokan_stripe_express_payment_request_button_locations']/..//span[@class='select2-selection select2-selection--multiple']",
                    buttonLocationsValues: ".select2-results ul li",
                    buttonSize: "#woocommerce_dokan_stripe_express_payment_request_button_size",
                    //advanced settings
                    displayNoticeToNonConnectedSellers: "#woocommerce_dokan_stripe_express_notice_on_vendor_dashboard",
                    sendAnnouncementToNonConnectedSellers: "#woocommerce_dokan_stripe_express_announcement_to_sellers",
                    announcementInterval: "#woocommerce_dokan_stripe_express_notice_interval",
                    debugLog: "#woocommerce_dokan_stripe_express_debug",
                    stripeExpressSaveChanges: ".woocommerce-save-button",
                },

                //accounts
                automaticPasswordGeneration: "#woocommerce_registration_generate_password",
                accountSaveChanges: ".woocommerce-save-button",

                //update success message
                updatedSuccessMessage: "#message.updated.inline p",
            },

        },


        //products
        products: {
            //products menus
            allProductsMenu: '//li[@id="menu-posts-product"]//a[text()="All Products"]',
            addNewMenu: '//li[@id="menu-posts-product"]//a[text()="Add New"]',
            categoriesMenu: '//li[@id="menu-posts-product"]//a[text()="Categories"]',
            tagsMenu: '//li[@id="menu-posts-product"]//a[text()="Tags"]',
            addOnsMenu: '//li[@id="menu-posts-product"]//a[text()="Add-ons"]',
            attributesMenu: '//li[@id="menu-posts-product"]//a[text()="Attributes"]',

            //product
            product: {
                //add new product
                productName: '#title',
                //product data
                productType: '#product-type',
                virtual: '#\\_virtual',
                downloadable: '#\\_downloadable',
                //add new product sub menus
                general: '.general_options > a',
                inventory: '.inventory_options > a',
                shipping: '.shipping_options > a',
                linkedProducts: '.linked_product_options > a',
                attributes: '.attribute_options > a',
                variations: '.variations_options > a',
                advanced: '.advanced_options > a',
                auction: '.auction_tab_options > a',
                bookingAvailability: '.bookings_availability_options > a',
                bookingCosts: '.bookings_pricing_options > a',

                //General
                regularPrice: '#\\_regular_price',
                salePrice: '#\\_sale_price',
                salePriceDateFrom: '#\\_sale_price_dates_from',
                salePriceDateTo: '#\\_sale_price_dates_to',
                addDownloadableFiles: '.insert',
                fileName: '.file_name > .input_text',
                fileUrl: '.file_url > .input_text',
                chooseFile: '.upload_file_button',
                downloadLimit: '#\\_download_limit',
                downloadExpiry: "#\\_download_expiry",
                taxStatus: "#\\_tax_status",
                taxClass: "#\\_tax_class",
                enableWholesale: "#enable_wholesale",
                wholesalePrice: "#wholesale_price",
                minimumQuantityForWholesale: "#wholesale_quantity",
                enableMinMaxRule: "#product_wise_activation",
                minimumQuantityToOrder: "#min_quantity",
                maximumQuantityToOrder: "#max_quantity",
                minimumAmountToOrder: "#min_amount",
                maximumAmountToOrder: "#max_amount",
                orderRules: "#\\_donot_count",
                categoryRules: "#ignore_from_cat",
                //external product
                productUrl: '#\\_product_url',
                buttonText: '#\\_button_text',
                //simple subscription
                subscriptionPrice: '#\\_subscription_price',
                subscriptionPeriodInterval: '#\\_subscription_period_interval',
                subscriptionPeriod: '#\\_subscription_period',
                expireAfter: '#\\_subscription_length',
                signUpFee: '#\\_subscription_sign_up_fee',
                subscriptionTrialLength: '#\\_subscription_trial_length',
                subscriptionTrialPeriod: '#\\_subscription_trial_period',
                //dokan subscription 
                numberOfProducts: '#\\_no_of_product',
                packValidity: '#\\_pack_validity',
                advertisementSlot: '#\\_dokan_advertisement_slot_count',
                expireAfterDays: '#\\_dokan_advertisement_validity',
                dokanSubscriptionAdminCommissionType: '#\\_subscription_product_admin_commission_type',
                dokanSubscriptionAdminCommissionSingle: '.show_if_product_pack #admin_commission',
                dokanSubscriptionAdminCommissionCombined: '.subscription_additional_fee > .input-text',
                allowedProductTypes: '.dokan_subscription_allowed_product_types .select2-search__field',
                allowedCategoriesUncategorized: '._vendor_allowed_categories .select2-search__field',
                restrictGalleryImageUpload: '#\\_enable_gallery_restriction',
                recurringPayment: '#\\_enable_recurring_payment',
                billingCycleRange: '#\\_dokan_subscription_period_interval',
                billingCyclePeriodInterval: '#\\_dokan_subscription_period',
                billingCycleStop: '#\\_dokan_subscription_length',
                enableTrial: '#dokan_subscription_enable_trial',
                trialPeriodRange: '.dokan-subscription-range',
                trialPeriodPeriod: "//select[@name='dokan_subscription_trial_period_types']",
                //auction
                itemCondition: '#\\_auction_item_condition',
                auctionType: '#\\_auction_type',
                proxyBidding: '#\\_auction_proxy',
                startPrice: '#\\_auction_start_price',
                bidIncrement: '#\\_auction_bid_increment',
                reservePriced: '#\\_auction_reserved_price',
                buyItNowPrice: "//label[contains(text(),'Buy it now price')]/..//input[@id='_regular_price']",
                auctionDatesFrom: '#\\_auction_dates_from',
                auctionDatesTo: '#\\_auction_dates_to',

                //booking
                bookingDurationType: '#\\_wc_booking_duration_type',
                bookingDuration: '#\\_wc_booking_duration',
                bookingDurationMin: '#\\_wc_booking_min_duration',
                bookingDurationMax: '#\\_wc_booking_max_duration',
                bookingDurationUnit: '#\\_wc_booking_duration_unit',
                calendarDisplayMode: '#\\_wc_booking_calendar_display_mode',
                requiresConfirmation: '#\\_wc_booking_requires_confirmation',
                canBeCancelled: '#\\_wc_booking_user_can_cancel',
                //booking availability
                MaxBookingsPerBlock: '#\\_wc_booking_qty',
                MinimumBlockBookableMinDate: '#\\_wc_booking_min_date',
                MinimumBlockBookableMinDateUnit: '#\\_wc_booking_min_date_unit',
                MaximumBlockBookableMaxDate: '#\\_wc_booking_max_date',
                MaximumBlockBookableMaxDateUnit: '#\\_wc_booking_max_date_unit',
                RequireABufferPeriodOf: '#\\_wc_booking_buffer_period',
                AdjacentBuffering: '#\\_wc_booking_apply_adjacent_buffer',
                AllDatesAre: '#\\_wc_booking_default_date_availability',
                CheckRulesAgainst: '#\\_wc_booking_check_availability_against',
                RestrictSelectableDay: '#\\_wc_booking_has_restricted_days',
                //booking costs
                baseCost: '#\\_wc_booking_cost',
                blockCost: '#\\_wc_booking_block_cost',
                displayCost: '#\\_wc_display_cost',

                //inventory
                sku: '#\\_sku',
                manageStock: '#\\_manage_stock',
                stockQuantity: '#\\_stock',
                allowBackOrders: '#\\_backorders',
                lowStockThreshold: '#\\_low_stock_amount',
                stockStatus: '#\\_stock_status',
                soldIndividually: '#\\_sold_individually',
                //shipping
                weightKg: '#\\_weight',
                length: '#product_length',
                width: '#product_width',
                height: '#product_height',
                shippingClass: '#product_shipping_class',
                //linked Products
                upSells: '//label[contains(text(),"Grouped products")]/..//input[@class="select2-search__field"]',
                crossSells: '//label[contains(text(),"Upsells")]/..//input[@class="select2-search__field"]',
                //attributes
                customProductAttribute: '.attribute_taxonomy',
                addAttribute: '.add_attribute',
                attributeName: '.attribute_name .attribute_name',
                attributeValues: '.woocommerce_attribute_data textarea',
                selectAll: '.select_all_attributes',
                selectNone: '.minus',
                addNewAttribute: '.button.add_new_attribute',
                visibleOnTheProductPage: "//input[contains(@name, 'attribute_visibility')]",
                usedForVariations: "//input[contains(@name, 'attribute_variation')]",
                saveAttributes: '.save_attributes',
                //variations
                variations: '.woocommerce_variation',
                addVariations: '#field_to_edit',
                go: '.bulk_edit',  //invokes default js alert
                //advanced
                purchaseNote: '#\\_purchase_note',
                menuOrder: '#menu_order',
                enableReviews: '#comment_status',
                adminCommissionType: '#\\_per_product_admin_commission_type',
                adminCommissionSingle: '.show_if_simple #admin_commission',
                adminCommissionCombined: '.additional_fee > .input-text',
                //vendor
                vendor: '#dokan_product_author_override',
                vendorOptions: "#dokan_product_author_override > option",

                //category
                category: (categoryName) => `//label[contains(text(), ' ${categoryName}')]/input`,
                //tags
                tagInput: '#new-tag-product_tag',
                addTag: '.tagadd',
                //publish
                saveDraft: '#save-post',
                preview: '#post-preview',
                publish: '#publish',
                updatedSuccessMessage: ".updated.notice.notice-success",
            },

            // categories
            category: {
                name: "#tag-name",
                slug: "#tag-slug",
                parentCategory: "#parent",
                description: "#tag-description",
                commissionType: "#per_category_admin_commission_type",
                adminCommissionFromThisCategory: ".wc_input_price:nth-child(2)",
                displayType: "#display_type",
                uploadOrAddImage: ".upload_image_button",
                addNewCategory: "#submit",
                categoryCell: (categoryName) => `//td[contains(text(), '${categoryName.toLowerCase()}')]/..`,
            },

            // attributes
            attribute: {
                name: "#attribute_label",
                slug: "#attribute_name",
                enableArchives: "#attribute_public",
                defaultSortOrder: "#attribute_orderby",
                addAttribute: "#submit",
                attributeCell: (attributeName) => `//td[contains(text(), '${attributeName.toLowerCase()}')]/..`,
                configureTerms: (attributeName) => `//td[contains(text(), '${attributeName.toLowerCase()}')]/..//a[normalize-space()="Configure terms"]`,
                // terms
                attributeTerm: "#tag-name",
                attributeTermSlug: "#tag-slug",
                description: "#tag-description",
                addAttributeTerm: "#submit",
                attributeTermCell: (attributeTerm) => `//td[contains(text(), '${attributeTerm.toLowerCase()}')]/..`,
            },

        },
        //bookings
        bookings: {
            //menus
            allBooking: "//li[@id='menu-posts-wc_booking']//a[contains(text(),'All Bookings')]",
            resources: "//li[@id='menu-posts-wc_booking']//a[contains(text(),'Resources')]",
            addBooking: "//li[@id='menu-posts-wc_booking']//a[contains(text(),'Add Booking')]",
            calender: "//li[@id='menu-posts-wc_booking']//a[contains(text(),'Calendar')]",
            sendNotification: "//li[@id='menu-posts-wc_booking']//a[contains(text(),'Send Notification')]",
            settings: "//li[@id='menu-posts-wc_booking']//a[contains(text(),'Settings')]",
        },

        //marketing
        marketing: {
            //menus
            coupons: "//li[@id='toplevel_page_woocommerce-marketing']//a[contains(text(),'Coupons')]",
            //coupon
            // coupon sub menus
            general: "ss=#general_coupon_data",

            addCoupon: "//a[contains(text(),'Add coupon')]",
            couponCode: "#title",
            couponDescription: "#woocommerce-coupon-description",
            //general
            discountType: "#discount_type",
            couponAmount: "#coupon_amount",
            allowFreeShipping: "#free_shipping",
            couponExpiryDate: "#expiry_date",
            //vendor limits
            enableForAllVendors: "#admin_coupons_enabled_for_vendor",
            couponPriceDeduct: "#coupon_commissions_type",
            vendors: ".dokan-admin-coupons-include-vendors .select2-search__field",
            products: ".dokan-coupons-include-product-search-group .select2-search__field",
            excludeProducts: "//label[contains(text(),'Exclude products')]/..//input[@class='select2-search__field']",
            showOnStores: "#admin_coupons_show_on_stores",
            notifyVendors: "#admin_coupons_send_notify_to_vendors",
            //usage restriction
            minimumSpend: "#minimum_amount",
            maximumSpend: "#maximum_amount",
            individualUseOnly: "#individual_use",
            excludeSaleItems: "#exclude_sale_items",
            productCategories: "//label[contains(text(),'Product categories')]/..//input[@class='select2-search__field']",
            excludeCategories: "//label[contains(text(),'Exclude categories')]/..//input[@class='select2-search__field']",
            allowedEmails: "#customer_email",
            //usage limits
            usageLimitPerCoupon: "//input[@id='usage_limit']",
            usageLimitPerUser: "#usage_limit_per_user",

            publish: "#publish",
        },

        //appearance
        appearance: {
            //menus
            themes: "//li[@id='menu-appearance']//a[contains(text(),'Themes')]",
            addNew: "//div[@class='wrap']//a[contains(text(),'Add New')]",
            searchTheme: "#wp-filter-search-input",
        },

        //plugins
        plugins: {
            //plugins menus
            installedPlugins: '//a[text()="Installed Plugins"]',
            plugin: (pluginSlug) => `//tr[@data-slug='${pluginSlug}']`,

            //add new plugins
            addNew: '.page-title-action',
            searchPlugin: '#search-plugins',
            uploadPlugin: '.upload',
            chooseFile: '#pluginzip',
            installNow: '#install-plugin-submit',
            activatePlugin: '.button.button-primary',
            activateCustomPlugin: (plugin) => `//strong[normalize-space()="${plugin}"]/..//div//span[@class="activate"]`,
        },

        //users
        users: {
            //users menu
            allUsers: "//li[@id='menu-users']//a[contains(text(),'All Users')]",
            addNew: "//li[@id='menu-users']//a[contains(text(),'Add New')]",
            profile: "//li[@id='menu-users']//a[contains(text(),'Profile')]",

            //all users
            allUsersAddNew: ".page-title-action",
            editUser: ".visible > .edit > a",

            //add new user
            newUserName: "#user_login",
            newUserEmail: "#email",
            newUserFirstName: "#first_name",
            newUserFastName: "#last_name",
            newUserWebsite: '#url',
            newUserLanguage: "#locale",
            newUserPassword: "#pass1",
            newUserSendUserNotification: "#send_user_notification",
            newUserRole: "#role",
            addNewUser: "#createusersub",

            //edit user
            //personal info
            role: "#role",
            firstName: "#first_name",
            lastName: "#last_name",
            nickname: "#nickname",
            displayNamePubliclyAs: "#display_name",
            //contact info
            email: "#email",
            website: "#url",
            //about the user
            biographicalInfo: "#description",
            //account Management
            setNewPassword: ".wp-generate-pw",
            newPassword: "#pass1",
            //customer billing address
            billingFirstName: "#billing_first_name",
            billingLastName: "#billing_last_name",
            billingCompany: "#billing_company",
            billingAddress1: "#billing_address_1",
            billingAddress2: "#billing_address_2",
            billingCity: "#billing_city",
            billingPostcode: "#billing_postcode",
            billingCountryOrRegion: "#select2-billing_country-container",
            billingCountryOrRegionValues: ".select2-results ul li",
            billingState: "#billing_state",
            billingPhone: "#billing_phone",
            billingEmailAddress: "#billing_email",
            billingCompanyIdOrEuidNumber: "#billing_dokan_company_id_number",
            billingVatOrTaxNumber: "#billing_dokan_vat_number",
            billingBank: "#billing_dokan_bank_name",
            billingBankIban: "#billing_dokan_bank_iban",
            //customer shipping address
            copyFromBillingAddress: "#copy_billing",
            shippingFirstName: "#shipping_first_name",
            shippingLastName: "#shipping_last_name",
            shippingCompany: "#shipping_company",
            shippingAddress1: "#shipping_address_1",
            shippingAddress2: "#shipping_address_2",
            shippingCity: "#shipping_city",
            shippingPostcode: "#shipping_postcode",
            shippingCountryOrRegion: "#select2-shipping_country-container",
            shippingCountryOrRegionValues: ".select2-results ul li",
            shippingState: "#shipping_state",
            shippingPhone: "#shipping_phone",
            //dokan options
            dokanBanner: ".dokan-banner .button-area a",
            dokanStoreName: "//input[@name='dokan_store_name']",
            dokanStoreUrl: "#seller-url",
            dokanAddress1: "//input[@name='dokan_store_address[street_1]']",
            dokanAddress2: "//input[@name='dokan_store_address[street_2]']",
            dokanCity: "//input[@name='dokan_store_address[city]']",
            dokanPostcode: "//input[@name='dokan_store_address[zip]']",
            dokanCountry: "#select2-country-container",
            dokanCountryValues: ".select2-results ul li",
            dokanState: "##select2-state-container",
            dokanStateValues: ".select2-results ul li",
            dokanPhone: "//input[@name='dokan_store_phone']",
            dokanCompanyName: "//input[@name='dokan_company_name']",
            dokanCompanyIdOrEuidNumber: "//input[@name='dokan_company_id_number']",
            dokanVatOrTaxNumber: "//input[@name='dokan_vat_number']",
            dokanBank: "//input[@name='dokan_bank_name']",
            dokanBankIban: "//input[@name='dokan_bank_iban']",
            dokanFacebook: "//input[@name='dokan_social[fb]']",
            dokanTwitter: "//input[@name='dokan_social[twitter]']",
            dokanPinterest: "//input[@name='dokan_social[pinterest]']",
            dokanLinkedin: "//input[@name='dokan_social[linkedin]']",
            dokanYoutube: "//input[@name='dokan_social[youtube]']",
            dokanInstagram: "//input[@name='dokan_social[instagram]']",
            dokanFlicker: "//input[@name='dokan_social[flickr]']",
            dokanSelling: "#dokan_enable_selling",
            dokanPublishing: "#dokan_publish",
            dokanAdminCommissionType: "#dokan_admin_percentage_type",
            dokanAdminCommission: "#admin-commission",
            dokanFeaturedVendor: "#dokan_feature",
            dokanWithdrawThreshold: "#withdraw_date_limit",
            dokanAuction: "#dokan_disable_auction",
            //dokan subscription
            assignSubscriptionPack: ".dps_assign_pack select",
            //update user
            updateUser: "#submit",
        },

        //tools
        tools: {
            //menus
            import: "//li[@id='menu-tools']//a[text()='Import']",
            export: "//li[@id='menu-tools']//a[text()='Export']",
        },

        //settings
        settings: {
            // settings menus
            general: "//li[@id='menu-settings']//a[text()='General']",
            writing: "//li[@id='menu-settings']//a[text()='Writing']",
            reading: "//li[@id='menu-settings']//a[text()='Reading']",
            discussion: "//li[@id='menu-settings']//a[text()='Discussion']",
            media: "//li[@id='menu-settings']//a[text()='Media']",
            permalinks: "//li[@id='menu-settings']//a[text()='Permalinks']",
            privacy: "//li[@id='menu-settings']//a[text()='Privacy']",

            // general settings
            siteTitle: "#blogname",
            tagline: "#blogdescription",
            wordPressAddressUrl: "#siteurl",
            siteAddressUrl: "#home",
            administrationEmailAddress: "#new_admin_email",
            membership: "#users_can_register",
            newUserDefaultRole: "#default_role",
            siteLanguage: "#WPLANG",
            timezone: "#timezone_string",
            customDateFormat: "//input[@id='date_format_custom_radio' and @name='date_format']",
            timeFormat: "//input[@id='time_format_custom_radio' and @name='time_format']",
            weekStartsOn: "#start_of_week",
            generalSaveChanges: "#submit",

            //permalinks settings
            //common settings
            numeric: "//input[@value='/archives/%post_id%']",
            postName: "//input[@value='/%postname%/' and @type='radio']",
            //optional settings
            shopBaseWithCategory: "//input[@value='/shop/%product_cat%/']",
            customBase: "//input[@id='woocommerce_custom_selection']",
            customBaseInput: "//input[@id='woocommerce_permalink_structure']",
            permalinkSaveChanges: "#submit",

            //update settings
            updatedSuccessMessage: "#setting-error-settings_updated strong",
        },

    },



    //--------------------------------------------vendor---------------------------------------------//



    vendor: {
        //vendor registration
        vRegistration: {
            //vendor registration
            regEmail: "#reg_email",
            regPassword: "#reg_password",
            regVendor: "//input[@value='seller']",
            firstName: "#first-name",
            lastName: "#last-name",
            shopName: "#company-name",
            shopUrl: "#seller-url",
            companyName: "#dokan-company-name",
            companyId: "#dokan-company-id-number",
            vatNumber: "#dokan-vat-number",
            bankName: "#dokan-bank-name",
            bankIban: "#dokan-bank-iban",
            phone: "#shop-phone",
            subscriptionPack: "#dokan-subscription-pack",
            //register button
            register: ".woocommerce-Button",
        },

        //vendor setup wizard
        vSetup: {
            //intro
            letsGo: '.lets-go-btn',
            notRightNow: '.not-right-now-btn',

            //store setup   
            storeProductsPerPage: '#store_ppp',
            street1: '#address\\[street_1\\]',
            street2: '#address\\[street_2\\]',
            city: '#address\\[city\\]',
            zipCode: '#address\\[zip\\]',
            country: '#select2-addresscountry-container',
            countryInput: '.select2-search__field',
            state: '#calc_shipping_state',
            email: '//input[@id="show_email"]/..//label',
            continueStoreSetup: '.store-step-continue',
            skipTheStepStoreSetup: '.store-step-skip-btn',

            //payment setup
            //paypal
            paypal: "//input[@name='settings[paypal][email]']",
            //bank
            bankAccountName: "//input[@placeholder='Your bank account name']",
            bankAccountNumber: "//input[@placeholder='Your bank account number']",
            bankName: "//input[@placeholder='Name of bank']",
            bankAddress: "//textarea[@placeholder='Address of your bank']",
            bankRoutingNumber: "//input[@placeholder='Routing number']",
            bankIban: "//input[@placeholder='IBAN']",
            bankSwiftCode: "//input[@placeholder='Swift code']",
            //custom payment method
            customPayment: "//input[@name='settings[dokan_custom][value]']",
            //paypal marketplace
            paypalMarketplace: '#vendor_paypal_email_address',
            paypalMarketplaceSigUp: '.vendor_paypal_connect',
            // Stripe
            ConnectWithStripe: '.dokan-stripe-connect-link',
            //skrill
            skrill: "//input[@name='settings[skrill][email]']",
            // continue from payment setup
            continuePaymentSetup: '.payment-continue-btn',
            skipTheStepPaymentSetup: '.payment-step-skip-btn',

            //last step
            goToStoreDashboard: '.wc-setup-actions.step .button',
            returnToMarketplace: '.wc-return-to-dashboard',
        },

        //vendor dashboard
        vDashboard: {
            //dashboard menus
            dashboard: '.dashboard > a',
            products: '.products > a',
            orders: '.orders > a',
            userSubscription: '.user-subscription > a',
            coupons: '.coupons > a',
            reports: '.reports > a',
            deliveryTime: '.delivery-time-dashboard > a',
            reviews: '.reviews > a',
            withdraw: '.withdraw > a',
            returnRequest: '.return-request > a',
            staff: '.staffs > a',
            followers: '.followers > a',
            booking: '.booking > a',
            analytics: '.analytics > a',
            announcements: '.announcement > a',
            tools: '.tools > a',
            auction: '.auction > a',
            support: '.support > a',
            settings: '.settings > a',
            visitStore: '.fa-external-link-alt',
            editAccount: '.fa-user',

            //overview
            sales: "//div[@class='title' and contains(text(), 'Sales')]/..//div[@class='count']",
            earning: "//div[@class='title' and contains(text(), 'Earning')]/..//div[@class='count']",
            pageView: "//div[@class='title' and contains(text(), 'Pageview')]/..//div[@class='count']",
            order: "//div[@class='title' and contains(text(), 'Order')]/..//div[@class='count']",
        },

        //products
        product: {
            //menus
            all: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'All')]",
            online: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'Online')]",
            draft: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'Draft')]",
            pendingReview: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'Pending Review')]",
            inStock: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'In stock')]",
            //filter
            filterByDate: "#filter-by-date",
            filterByCategory: "#product_cat",
            filterByType: "#filter-by-type",
            filterByOther: "//select[@name='filter_by_other']",
            filter: "//button[@name='product_listing_filter']",
            //search product
            searchProduct: ".dokan-w5 .dokan-form-control",
            search: ".dokan-w5 > .dokan-btn",
            //bulk action
            selectAll: "#cb-select-all",
            bulkProductActionSelect: "#bulk-product-action-selector",
            applyBulkAction: "#bulk-product-action",

            //import export product
            import: "//span[@class='dokan-add-product-link']//a[contains(text(),'Import')]",
            export: "//span[@class='dokan-add-product-link']//a[contains(text(),'Export')]",

            // product sub options
            productLink: (productName) => `//a[contains(text(),'${productName}')]`,
            editProduct: ".row-actions > .edit > a",
            deletePermanently: ".row-actions > .delete > a",
            view: ".row-actions > .view > a",
            quickEdit: ".row-actions > .item-inline-edit > a",
            duplicate: ".row-actions > .duplicate > a",

            //create product
            closeCreateProductPopup: ".mfp-close",
            addNewProduct: ".dokan-add-new-product",
            productName: "input[name='post_title']",
            productImage: ".dokan-feat-image-btn",
            productAddGalleryImage: ".fa-plus",
            productPrice: "#_regular_price",
            productDiscountedPrice: "#_sale_price",
            productDiscountedPriceSchedule: ".sale_schedule",
            productScheduleFrom: ".dokan-start-date",
            productScheduleTo: ".dokan-end-date",
            productScheduleCancel: ".cancel_sale_schedule.dokan-hide",
            productCategory: "#select2-product_cat-container",
            productCategoryInput: ".select2-search--dropdown .select2-search__field",
            productCategoryValues: ".select2-results ul li",
            productTags: '.select2-search__field',
            productDescription: 'textarea[placeholder="Enter some short description about this product..."]',
            createProduct: "#dokan-create-new-product-btn",
            createAndNewProduct: "#dokan-create-and-add-new-product-btn",

            //edit product
            viewProduct: ".dokan-right .dokan-btn",
            title: "#post_title",
            //permalink
            permalinkEdit: ".edit-slug",
            confirmPermalinkEdit: ".cancel",
            cancelPermalinkEdit: ".save",
            //image
            addProductImage: ".dokan-feat-image-btn",
            uploadedProductImage: '.image-wrap img',
            removeProductImage: '.close.dokan-remove-feat-image',
            addGalleryImage: ".fa-plus",
            uploadGalleryImage: "#dokan-product-images .image",
            removeGalleryImage: ".action-delete",
            //product type
            productType: "#product_type",
            downloadable: "#\\_downloadable",
            virtual: "#\\_virtual",
            price: "#\\_regular_price",
            discountedPrice: "#\\_sale_price",
            discountedPriceSchedule: ".sale_schedule",
            scheduleFrom: ".dokan-start-date",
            scheduleTo: ".dokan-end-date",
            scheduleCancel: ".cancel_sale_schedule",
            category: "#select2-product_cat-container",
            tags: ".select2-search__field",
            //external product
            productUrl: '#\\_product_url',
            buttonText: '#\\_button_text',
            //simple subscription
            subscriptionPrice: '#\\_subscription_price',
            subscriptionPeriodInterval: '#\\_subscription_period_interval',
            subscriptionPeriod: '#\\_subscription_period',
            expireAfter: '#\\_subscription_length',
            signUpFee: '#\\_subscription_sign_up_fee',
            subscriptionTrialLength: '#\\_subscription_trial_length',
            subscriptionTrialPeriod: '#\\_subscription_trial_period',
            //short description
            shortDescriptionIframe: ".dokan-product-short-description iframe",
            shortDescriptionHtmlBody: "#tinymce",
            //description
            descriptionIframe: ".dokan-product-description iframe",
            descriptionHtmlBody: "#tinymce",
            //inventory
            sku: "#\\_sku",
            stockStatus: "#\\_stock_status",
            enableProductStockManagement: "#\\_manage_stock",
            stockQuantity: "//input[@name='_stock']",
            lowStockThreshold: "//input[@name='_low_stock_amount']",
            allowBackOrders: "#\\_backorders",
            allowOnlyOneQuantityOfThisProductToBeBoughtInASingleOrder: "#\\_sold_individually",
            //geolocation
            sameAsStore: "#\\_dokan_geolocation_use_store_settings",
            productLocation: "#\\_dokan_geolocation_product_location",
            //add-ons
            addField: ".wc-pao-add-field",
            type: "#wc-pao-addon-content-type-0",
            displayAs: "#wc-pao-addon-content-display-0",
            titleRequired: "#wc-pao-addon-content-name-0",
            formatTitle: "#wc-pao-addon-content-title-format",
            enableDescription: "wc-pao-addon-description-enable-0",
            addDescription: "#wc-pao-addon-description-0",
            requiredField: "#wc-pao-addon-required-0",
            import: ".wc-pao-import-addons",
            export: ".wc-pao-export-addons",
            excludeAddons: "\\_product_addons_exclude_global",
            expandAll: ".wc-pao-expand-all",
            closeAll: ".wc-pao-close-all",
            //add-ons option
            enterAnOption: ".wc-pao-addon-content-label > input",
            optionPriceType: ".wc-pao-addon-option-price-type",
            optionPrice: ".wc-pao-addon-content-price input",
            addOption: ".wc-pao-add-option",
            removeOptionCrossIcon: ".wc-pao-addon-content-remove > .button",
            cancelRemoveOption: ".swal2-cancel",
            okRemoveOption: ".swal2-confirm",
            //shipping
            thisProductRequiresShipping: "#\\_disable_shipping",
            weight: "#\\_weight",
            length: "#\\_length",
            width: "#\\_width",
            height: "#\\_height",
            shippingClass: "#product_shipping_class",
            shippingSettings: ".help-block > a",
            //tax
            taxStatus: "#\\_tax_status",
            taxClass: "#\\_tax_class",
            //linked products
            upSells: "//label[contains(text(),'Upsells')]/..//input[@class='select2-search__field']",
            crossSells: "//label[contains(text(),'Cross-sells ')]/..//input[@class='select2-search__field']",
            //attribute
            customProductAttribute: "#predefined_attribute",
            addAttribute: ".add_new_attribute",
            visibleOnTheProductPage: "//input[contains(@name, 'attribute_visibility')]",
            usedForVariations: "//input[contains(@name, 'attribute_variation')]",
            selectTerms: ".dokan-attribute-values .select2-search__field",
            selectAll: ".plus",
            selectNone: ".minus",
            removeAttribute: ".dokan-product-remove-attribute",
            confirmRemoveAttribute: ".swal2-confirm",
            cancelRemoveAttribute: ".swal2-cancel",
            saveAttributes: ".dokan-save-attribute",
            addVariations: "#field_to_edit",
            go: ".do_variation_action",
            confirmGo: ".swal2-confirm",
            okSuccessAlertGo: ".swal2-confirm",
            cancelGo: ".swal2-cancel.swal2-styled",
            variationPrice: ".swal2-popup.swal2-modal.swal2-show .swal2-input",
            okVariationPrice: ".swal2-confirm",
            cancelVariationPrice: ".swal2-cancel",
            saveVariationChanges: ".save-variation-changes",
            cancelVariationChanges: ".cancel-variation-changes",
            defaultAttribute: ".dokan-variation-default-select > .dokan-form-control",
            //discount options
            enableBulkDiscount: "#\\_is_lot_discount",
            lotMinimumQuantity: "#\\_lot_discount_quantity",
            lotDiscountInPercentage: "#\\_lot_discount_amount",
            //rma options
            overrideYourDefaultRmaSettingsForThisProduct: "#dokan_rma_product_override",
            rmaLabel: "#dokan-rma-label",
            rmaType: "#dokan-warranty-type",
            rmaLength: "#dokan-warranty-length",
            rmaLengthValue: "//input[@name='warranty_length_value']",
            rmaLengthDuration: "#dokan-warranty-length-duration",
            refundReasons: ".checkbox input",
            rmaPolicyIframe: '#wp-warranty_policy-wrap iframe',
            rmaPolicyHtmlBody: '#tinymce',
            //wholesale options
            enableWholeSaleForThisProduct: "#wholesale\\[enable_wholesale\\]",
            wholesalePrice: "#dokan-wholesale-price",
            minimumQuantityForWholesale: "#dokan-wholesale-qty",
            //min-max options
            enableMinMaxRulesThisProduct: "#product_wise_activation",
            minimumQuantity: "#min_quantity",
            maximumQuantity: "#max_quantity",
            minimumAmount: "#min_amount",
            maximumAmount: "#max_amount",
            orderRulesDoNotCount: "#\\_donot_count",
            categoryRulesExclude: "#ignore_from_cat",
            //other Options
            productStatus: "#post_status",
            visibility: "#\\_visibility",
            purchaseNote: "#\\_purchase_note",
            enableProductReviews: "#\\_enable_reviews",
            //advertise product
            advertiseThisProduct: "#dokan_advertise_single_product",
            confirmAdvertiseThisProduct: ".swal2-confirm",
            okSuccessAlertAdvertiseThisProduct: ".swal2-confirm",
            cancelAdvertiseThisProduct: ".swal2-cancel",
            // save product
            saveProduct: ".dokan-btn-lg",
            updatedSuccessMessage: ".dokan-message"
        },

        //orders
        vOrders: {
            //menus
            all: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'All')]",
            completed: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'Completed')]",
            processing: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'Processing')]",
            onHold: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'On-hold')]",
            pending: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'Pending')]",
            cancelled: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'Cancelled')]",
            refunded: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'Refunded')]",
            failed: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(), 'Failed')]",
            //export order
            exportAll: "//input[@name='dokan_order_export_all']",
            exportFiltered: "//input[@name='dokan_order_export_filtered']",
            //filter
            filterByDate: "#order_date_filter",
            filterByRegisteredCustomer: ".page-template-default",
            filter: ".dokan-left .dokan-btn",
            //bulk actions
            selectAll: "#cb-select-all",
            selectBulkOrderAction: "#bulk-order-action-selector",
            applyBulkOrder: "#bulk-order-action",
            //order details from table
            orderTotalTable: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../../..//td[@class='dokan-order-total']//bdi`,
            orderTotalAfterRefundTable: (orderNumber) => `///strong[contains(text(),'Order ${orderNumber}')]/../../..//td[@class='dokan-order-total']//ins//bdi`,
            vendorEarningTable: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../../..//td[@class='dokan-order-earning']//span`,
            orderStatusTable: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../../..//td[@class='dokan-order-status']//span`,


            //order sub-actions
            orderLink: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/..`,
            processing: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../../..//a[@data-original-title='Processing']`,
            complete: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../../..//a[@data-original-title='Complete']`,
            view: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../../..//a[@data-original-title='View']`,

            //edit order status
            currentOrderStatus: ".order-status .dokan-label",
            selectedOrderStatus: "//select[@id='order_status']//option[@selected='selected']",
            edit: ".dokan-edit-status",
            orderStatus: "#order_status",
            updateOrderStatus: "//input[@name='dokan_change_status']",

            //order details
            orderNumber: ".dokan-panel-heading strong",
            orderDate: "//span[contains(text(),'Order Date:')]/..",
            orderTotal: "//td[contains(text(),'Order Total:')]/..//bdi",
            orderTotalBeforeRefund: "//td[contains(text(),'Order Total:')]/..//del",
            orderTotalAfterRefund: "//td[contains(text(),'Order Total:')]/..//ins//bdi",
            discount: "//td[contains(text(),'Discount')]/..//bdi",
            shippingMethod: "//tr[contains(@class,'shipping')]//div[@class='view']",
            shippingCost: "//td[contains(text(),'Shipping')]/..//bdi",
            tax: "//td[contains(text(),'Tax')]/..//bdi",
            refunded: ".total.refunded-total bdi",

            //refund order
            refundDiv: "#woocommerce-order-items",
            requestRefund: ".dokan-btn.refund-items",
            productQuantity: (productName) => `//td[@class='name' and @data-sort-value='${productName}']/..//td[@class='quantity']//div`,
            productCost: (productName) => `//td[@class='name' and @data-sort-value='${productName}']/..//td[@class='line_cost']//div`,
            productTax: (productName) => `//td[@class='name' and @data-sort-value='${productName}']/..//td[@class='line_tax']//div`,
            refundProductQuantity: (productName) => `//td[@class='name' and @data-sort-value='${productName}']/..//td[@class='quantity']//div[@class='refund']//input`,
            refundProductCostAmount: (productName) => `//td[@class='name' and @data-sort-value='${productName}']/..//input[@class='refund_line_total wc_input_price']`,
            refundProductTaxAmount: (productName) => `//td[@class='name' and @data-sort-value='${productName}']/..//input[@class='refund_line_tax wc_input_price']`,

            // shippingCost: (shippingName) => ``, //TODO:add locator
            refundShippingAmount: (shippingName) => `//div[@class='view' and contains(text(),'${shippingName}')]/../../..//input[@class='refund_line_total wc_input_price']`,
            refundShippingTaxAmount: (shippingName) => `//div[@class='view' and contains(text(),'${shippingName}')]/../../..//input[@class='refund_line_tax wc_input_price']`,

            refundReason: "#refund_reason",
            refundManually: ".dokan-btn.do-manual-refund",
            confirmRefund: ".swal2-confirm.swal2-styled.swal2-default-outline",
            refundRequestSuccessMessage: "#swal2-html-container",
            refundRequestSuccessMessageOk: ".swal2-confirm.swal2-styled.swal2-default-outline",
            cancelRefund: ".dokan-btn.cancel-action",

        },

        //user subscriptions
        vUserSubscriptions: {
            //filter
            filterByDate: "#order_date_filter",
            filter: ".dokan-btn",

            //edit subscription
            subscription: "td a strong",
            //edit subscription order status
            editSubscriptionOrderStatus: ".dokan-edit-status small",
            subscriptionOrderStatus: "#order_status",
            updateSubscriptionOrderStatus: "//input[@name='dokan_vps_change_status']",
            cancelSubscriptionOrderStatus: ".dokan-btn-default",
            //downloadable product permission
            chooseADownloadableProduct: ".select2-search__field",
            grantAccess: ".grant_access",
            downloadsRemaining: ".form-input",
            accessExpires: "td .short ",
            removeAccess: ".revoke_access",
            confirmRemoveAccess: ".swal2-confirm",
            cancelRemoveAccess: ".swal2-cancel",
            //subscription schedule
            billingInterval: "#\\_billing_interval",
            billingPeriod: "#\\_billing_period",
            nextPayment: "#next_payment",
            nextPaymentHour: "#next_payment_hour",
            nextPaymentMinute: "#next_payment_minute",
            endDate: "#end",
            endDateHour: "#end_hour",
            endDateMinute: "#end_minute",
            updateSchedule: '//input[@name="dokan_change_subscription_schedule"]',
            //subscription notes
            addNoteContent: "#add-note-content",
            orderNoteType: "#order_note_type",
            addNote: ".btn",
        },

        //coupons 
        vCoupon: {
            //create coupon
            addNewCoupon: ".dokan-btn",
            couponTitle: "#title",
            description: "#description",
            discountType: "#discount_type",
            amount: "#coupon_amount",
            emailRestrictions: "#email_restrictions",
            usageLimit: "#usage_limit",
            usageLimitPerUser: "#usage_limit_per_user",
            expireDate: "#dokan-expire",
            excludeSaleItems: "#checkboxes-2",
            minimumAmount: "#minium_ammount",
            product: "//label[contains(text(), 'Product')]/..//input[@class='select2-search__field']",
            selectAll: ".dokan-coupon-product-select-all",
            clear: ".dokan-coupon-product-clear-all",
            applyForNewProducts: "#apply_new_products",
            excludeProducts: "//label[contains(text(), 'Exclude products')]/..//input[@class='select2-search__field']",
            showOnStore: "#checkboxes-3",
            createCoupon: ".dokan-btn-danger",

            //menus
            myCoupons: "//ul[@class='dokan_tabs']//a[contains(text(), 'My Coupons')]",
            marketplaceCoupons: "//ul[@class='dokan_tabs']//a[contains(text(), 'Marketplace Coupons')]",

            //coupon dashboard
            createdCoupon: ".coupon-code.column-primary strong span"
        },

        //reports
        vReports: {
            //menus
            overview: "//ul[@class='dokan_tabs']//a[contains(text(), 'Overview')]",
            salesByDay: "//ul[@class='dokan_tabs']//a[contains(text(), 'Sales by day')]",
            topSelling: "//ul[@class='dokan_tabs']//a[contains(text(), 'Top selling')]",
            topEarning: "//ul[@class='dokan_tabs']//a[contains(text(), 'Top earning')]",
            statement: "//ul[@class='dokan_tabs']//a[contains(text(), 'Statement')]",
            exportStatements: ".dokan-right",
            //filter
            startDate: "#from",
            endDate: "#to",
            show: ".dokan-btn",
        },

        //deliveryTime
        vDeliveryTime: {
            //filter
            deliveryTimeFilter: "#delivery-type-filter",
            filter: ".dokan-btn",
            // calender navigation
            month: ".fc-dayGridMonth-button",
            week: ".fc-timeGridWeek-button",
            day: ".fc-timeGridDay-button",
            list: ".fc-listWeek-button",
            previous: ".fc-prev-button",
            next: ".fc-next-button",
            today: ".fc-today-button"
        },

        //review
        vReviews: {
            //menus
            approved: "//div[@id='dokan-comments_menu']//a[contains(text(), 'Approved')]",
            pending: "//div[@id='dokan-comments_menu']//a[contains(text(), 'Pending')]",
            spam: "//div[@id='dokan-comments_menu']//a[contains(text(), 'Spam')]",
            trash: "//div[@id='dokan-comments_menu']//a[contains(text(), 'Trash')]",

            //bulk action
            selectAll: ".dokan-check-all",
            commentStatus: "select",
            commentStatusSubmit: ".dokan-btn",

            //review actions
            viewReview: "//a[contains(text(),'View Comment')]",
            reviewActions: "//ul[@class='dokan-cmt-row-actions']",
            reviewRow: (reviewMessage) => `//div[contains(text(),'${reviewMessage}')]/..`,
            unApproveReview: (reviewMessage) => `//div[contains(text(),'${reviewMessage}')]/..//ul[@class='dokan-cmt-row-actions']//a[contains(text(),'Unapprove')]`,
            approveReview: (reviewMessage) => `//div[contains(text(),'${reviewMessage}')]/..//ul[@class='dokan-cmt-row-actions']//a[contains(text(),'Approve')]`,
            spamReview: (reviewMessage) => `//div[contains(text(),'${reviewMessage}')]/..//ul[@class='dokan-cmt-row-actions']//a[contains(text(),'Spam')]`,
            trashReview: (reviewMessage) => `//div[contains(text(),'${reviewMessage}')]/..//ul[@class='dokan-cmt-row-actions']//a[contains(text(),'Trash')]`,
        },

        //withdraw
        vWithdraw: {
            // manual withdraw request
            minimumWithdrawAmount: "//p[contains(text(),'Your Balance:')]//strong[2]",
            balance: "//p[contains(text(),'Your Balance:')]//a//span[@class='woocommerce-Price-amount amount']",
            requestWithdraw: "#dokan-request-withdraw-button",
            withdrawAmount: "#withdraw-amount",
            withdrawMethod: "#withdraw-method",
            submitRequest: "#dokan-withdraw-request-submit",
            cancelRequest: "//strong[normalize-space()='Pending Requests']/..//a[normalize-space()='Cancel']",

            // auto disbursement schedule
            editSchedule: "#dokan-withdraw-display-schedule-popup",
            crossIcon: ".mfp-close",
            preferredPaymentMethod: "#preferred-payment-method",
            monthly: "#withdraw-schedule-monthly\\>",
            quarterly: "#withdraw-schedule-quarterly\\>",
            twicePerMonth: "#withdraw-schedule-biweekly\\>",
            weekly: "#withdraw-schedule-weekly\\>",
            onlyWhenBalanceIs: "#minimum-withdraw-amount",
            maintainAReserveBalance: "#withdraw-remaining-amount",
            changeSchedule: "#dokan-withdraw-schedule-request-submit",

            // view payments
            viewPayments: "#dokan-withdraw-display-requests-button",
            pendingRequests: "//ul[contains(@class,'subsubsub')]//a[contains(text(), 'Pending Requests')]",
            approvedRequests: "//ul[contains(@class,'subsubsub')]//a[contains(text(), 'Approved Requests')]",
            cancelledRequests: "//ul[contains(@class,'subsubsub')]//a[contains(text(), 'Cancelled Requests')]",
            withdrawDashboard: ".dokan-add-product-link a",

            //default payment methods
            customMethodMakeDefault: (methodName) => `//strong[contains( text(), '${methodName}')]/../..//button[contains(@class, 'dokan-btn')]`,
            //default payment setup links
            customMethodSetup: (methodName) => `//strong[contains( text(), '${methodName}')]/../..//a[@class='dokan-btn']`,
        },

        //return request
        vReturnRequest: {
            //menus
            all: "//ul[contains(@class,'request-statuses-filter')]//a[contains(text(),'All')]",
            completed: "//ul[contains(@class,'request-statuses-filter')]//a[contains(text(),'Completed')]",
            completed: "//ul[contains(@class,'request-statuses-filter')]//a[contains(text(),'Processing')]",

            //refund request actions
            returnRequestCell: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../..`,
            manage: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../..//a[@class='request-manage']`,
            delete: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../..//a[@class='request-delete']`,
            view: (orderNumber) => `//strong[contains(text(),'Order ${orderNumber}')]/../../..//i[@class='far fa-eye']`,
            //return request
            backToList: ".left-header-content > a",
            changeOrderStatus: "#status",
            updateOrderStatus: "//input[@value='Update']", //invokes default js alert
            sendRefund: ".dokan-send-refund-request",
            taxAmount: (productName) => `(//a[contains(text(),'${productName}')]/../..//bdi)[1]`,
            subTotal: (productName) => `(//a[contains(text(),'${productName}')]/../..//bdi)[2]`,
            taxRefund: "//input[contains(@name,'refund_tax')]",
            subTotalRefund: "//input[contains(@name,'refund_amount')]",
            sendRequest: "//input[@name='dokan_refund_submit']",
            sendRequestSuccessMessage: ".dokan-alert.dokan-alert-info",


            //conversations
            message: "#message",
            sendMessage: ".woocommerce-button",
        },

        //staff
        vStaff: {
            // add staff
            addNewStuff: ".dokan-btn",
            firstName: "#first_name",
            lastName: "#last_name",
            email: "#email",
            phone: "#phone",
            createStuff: ".dokan-btn",
            editStuff: ".edit > a",
            password: "#reg_password",
            updateStuff: ".dokan-btn",
            deleteStuff: ".delete > a",
            okDelete: ".swal2-confirm",
            cancelDelete: ".swal2-cancel",

            //manage permission
            managePermission: ".permission > a",
            updateStuffPermission: ".dokan-btn",
        },

        // booking
        vBooking: {
            //menus
            allBookingProduct: "//ul[@class='dokan_tabs']//a[contains(text(),'All Booking Product')]",
            manageBookings: "//ul[@class='dokan_tabs']//a[contains(text(),'Manage Bookings')]",
            calendar: "//ul[@class='dokan_tabs']//a[contains(text(),'Calendar')]",
            manageResources: "//ul[@class='dokan_tabs']//a[contains(text(),'Manage Resources')]",

            //create booking product
            viewProduct: ".view-product",
            productName: "#post_title",
            ProductImage: ".dokan-feat-image-btn",
            virtual: "#\\_virtual",
            accommodationBooking: "#\\_is_dokan_accommodation",
            productCategory: "#select2-product_cat-container",
            productCategoryInput: ".select2-search--dropdown > .select2-search__field",
            tags: ".select2-search__field",
            //accommodation Booking options
            minimumNumberOfNightsAllowedInABooking: "#\\_wc_booking_min_duration",
            maximumNumberOfNightsAllowedInABooking: "#\\_wc_booking_max_duration",
            checkinTime: "#\\_dokan_accommodation_checkin_time",
            checkoutTime: "#\\_dokan_accommodation_checkout_time",
            // general Booking options
            bookingDurationType: "#\\_wc_booking_duration_type",
            bookingDuration: "#\\_wc_booking_duration",
            bookingDurationUnit: "#\\_wc_booking_duration_unit",

            calenderDisplayMode: "#\\_wc_booking_calendar_display_mode",
            //checkboxes
            enableCalendarRangePicker: "#\\_wc_booking_enable_range_picker",
            requiresConfirmation: "#\\_wc_booking_requires_confirmation",
            canBeCancelled: "#\\_wc_booking_user_can_cancel",
            bookingCanBeCancelledLimit: "#\\_wc_booking_cancel_limit",
            bookingCanBeCancelledLimitUnit: "#\\_wc_booking_cancel_limit_unit",
            //shipping
            thisProductRequiresShipping: "#\\_disable_shipping",
            weight: "#\\_weight",
            length: "#\\_length",
            width: "#\\_width",
            height: "#\\_height",
            shippingClass: "#product_shipping_class",
            shippingSettings: ".help-block > a",
            //tax
            taxStatus: "#\\_tax_status",
            taxClass: "#\\_tax_class",
            //availability
            maxBookingsPerBlock: "#\\_wc_booking_qty",
            minimumBookingWindowIntoTheFutureDate: "#\\_wc_booking_min_date",
            minimumBookingWindowIntoTheFutureDateUnit: "#\\_wc_booking_min_date_unit",
            maximumBookingWindowIntoTheFutureDate: "#\\_wc_booking_max_date",
            maximumBookingWindowIntoTheFutureDateUnit: "#\\_wc_booking_max_date_unit",
            requireABufferPeriodOfMonthsBetweenBookings: "#\\_wc_booking_buffer_period",
            adjacentBuffering: "#\\_wc_booking_apply_adjacent_buffer",
            allDatesAre: "#\\_wc_booking_default_date_availability",
            checkRulesAgainst: "#\\_wc_booking_check_availability_against",
            restrictStartAndEndDays: "#dokan_booking_has_restricted_days_field",
            sunday: "#\\_wc_booking_restricted_days\\[0\\]",
            monday: "#\\_wc_booking_restricted_days\\[1\\]",
            tuesday: "#\\_wc_booking_restricted_days\\[2\\]",
            wednesday: "#\\_wc_booking_restricted_days\\[3\\]",
            thursday: "#\\_wc_booking_restricted_days\\[4\\]",
            friday: "#\\_wc_booking_restricted_days\\[5\\]",
            saturday: "#\\_wc_booking_restricted_days\\[6\\]",
            //setAvailabilityRange
            addRangeAvailability: "//div[@id='bookings_availability']//a[contains(text(),'Add Range')]",
            rangeTypeAbility: ".wc_booking_availability_type > select",
            rangeFromAbility: ".from_date > .date-picker ",
            rangeToAbility: ".to_date > .date-picker ",
            bookableAbility: "//select[@name='wc_booking_availability_bookable[]']",
            priorityAbility: ".priority > input",
            cancelAbility: "#availability_rows .remove",
            //costs
            baseCost: "#\\_wc_booking_cost",
            blockCost: "#\\_wc_booking_block_cost",
            displayCost: "#\\_wc_display_cost",
            //costRange
            addRangeCost: "dokan-booking-range-table > tfoot .button",
            rangeTypeCostRange: ".wc_booking_pricing_type > select",
            rangeFromCostRange: ".from_date > .date-picker",
            rangeToCostRange: ".to_date > .date-picker ",
            baseCostModifier: "//select[@name='wc_booking_pricing_base_cost_modifier[]']",
            baseCostRange: "//input[@name='wc_booking_pricing_base_cost[]']",
            blockCostModifier: "//select[@name='wc_booking_pricing_cost_modifier[]']",
            blockCostRange: "//input[@name='wc_booking_pricing_cost[]']",
            cancelCostRange: "#pricing_rows .remove",
            //extra Options
            //has persons
            hasPersons: "#\\_wc_booking_has_persons",
            minPersons: "#\\_wc_booking_min_persons_group",
            maxPersons: "#\\_wc_booking_max_persons_group",
            multiplyAllCostsByPersonCount: "#\\_wc_booking_person_cost_multiplier",
            countPersonsAsBookings: "#\\_wc_booking_person_qty_multiplier",
            enablePersonTypes: "#\\_wc_booking_has_person_types",
            //add person
            addPersonType: ".add_person",
            personTypeName: "//label[contains(text(),'Person Type Name:')]/..//input",
            personBaseCost: "//label[contains(text(),'Base Cost:')]/..//input",
            personBlockCost: "//label[contains(text(),'Block Cost:')]/..//input",
            description: ".person_description",
            min: "//label[contains(text(),'Min:')]/..//input",
            max: "//label[contains(text(),'Max:')]/..//input",
            unlink: ".unlink_booking_person", // invokes default js alert
            //has resources
            hasResources: "#\\_wc_booking_has_resources",
            //add resource
            label: "#\\_wc_booking_resource_label",
            resourcesAre: "#\\_wc_booking_resources_assignment",
            addResourceId: ".add_resource_id",
            addResource: ".add_resource",
            resourceBaseCost: "//label[contains(text(),'Base Cost:')]/..//input",
            resourceBlockCost: "//label[contains(text(),'Block Cost:')]/..//input",
            removeResource: ".remove_booking_resource.button", // invokes default js alert
            //short description
            shortDescriptionIframe: ".dokan-product-short-description iframe",
            shortDescriptionHtmlBody: "#tinymce",
            //description
            descriptionIframe: ".dokan-auction-post-content iframe",
            descriptionHtmlBody: "#tinymce",
            //inventory
            sku: "#\\_sku",
            stockStatus: "#\\_stock_status",
            enableProductStockManagement: "#\\_manage_stock",
            stockQuantity: "//input[@name='_stock']",
            lowStockThreshold: "//input[@name='_low_stock_amount']",
            allowBackorders: "#\\_backorders",
            allowOnlyOneQuantityOfThisProductToBeBoughtInASingleOrder: "#\\_sold_individually",
            //geolocation
            sameAsStore: "#\\_dokan_geolocation_use_store_settings",
            productLocation: "#\\_dokan_geolocation_product_location",
            //add-ons
            addField: ".wc-pao-add-field",
            type: "#wc-pao-addon-content-type-0",
            displayAs: "#wc-pao-addon-content-display-0",
            titleRequired: "#wc-pao-addon-content-name-0",
            formatTitle: "#wc-pao-addon-content-title-format",
            enableDescription: "wc-pao-addon-description-enable-0",
            addDescription: "#wc-pao-addon-description-0",
            requiredField: "#wc-pao-addon-required-0",
            bookingsMultiplyCostByPersonCount: "#addon_wc_booking_person_qty_multiplier_0",
            bookingsMultiplyCostByBlockCount: "#addon_wc_booking_block_qty_multiplier_0",
            import: ".wc-pao-import-addons",
            export: ".wc-pao-export-addons",
            excludeAddons: "#\\_product_addons_exclude_global",
            expandAll: ".wc-pao-expand-all",
            closeAll: ".wc-pao-close-all",
            //add-ons option
            enterAnOption: ".wc-pao-addon-content-label > input",
            optionPriceType: ".wc-pao-addon-option-price-type",
            optionPrice: ".wc-pao-addon-content-price input",
            addOption: ".wc-pao-add-option",
            removeOptionCrossIcon: ".wc-pao-addon-content-remove > .button",
            cancelRemoveOption: ".swal2-cancel",
            okRemoveOption: ".swal2-confirm",
            //other Options
            productStatus: "#post_status",
            visibility: "#\\_visibility",
            purchaseNote: "#\\_purchase_note",
            enableProductReviews: "#\\_enable_reviews",
            // save product
            saveProduct: ".dokan-btn-lg",

            //allBookingProduct
            addNewBookingProduct: ".dokan-btn-theme",
            addNewBooking: ".dokan-btn-theme",
            //addBooking
            customerId: "#select2-customer_id-container",
            selectABookableProduct: "#select2-bookable_product_id-container",
            createANewCorrespondingOrderForThisNewBooking: "//input[@name='booking_order' and @value='new']",
            assignThisBookingToAnExistingOrderWithThisId: "//input[@name='booking_order' and @value='existing']",
            bookingOrderId: ".text",
            DontCreateAnOrderForThisBooking: "//label[normalize-space()='Don\'t create an order for this booking.']/..//input",
            next: ".button-primary",

            //filter
            filterByDate: "#filter-by-date",
            filterByCategory: "#product_cat",
            filterByType: "#filter-by-type",
            filterByOther: "//select[@name='filter_by_other']",
            filter: "//button[@name='product_listing_filter']",
            //search product
            searchProduct: ".dokan-w5 .dokan-form-control",
            search: ".dokan-w5 > .dokan-btn",

            //manage Booking
            //menus
            all: "//ul[contains(@class,'order-statuses-filter')]//a[contains(text(),'All')]",
            unPaid: "//ul[contains(@class,'order-statuses-filter')]//span[contains(text(),'Un-paid')]/..",
            paidAndConfirmed: "//ul[contains(@class,'order-statuses-filter')]//span[contains(text(),'Paid & Confirmed')]/..",
            completed: "//ul[contains(@class,'order-statuses-filter')]//span[contains(text(),'Complete')]/..",

            view: ".dokan-btn",
            editBookingStatus: '.dokan-edit-status',
            selectOrderStatus: "#booking_order_status",
            UpdateOrderStatus: ".dokan-btn-success",
            cancelUpdateOrderStatus: "dokan-btn-default",

            //calender
            calendarBookingsFilter: "#calendar-bookings-filter",
            month: "//select[@name='calendar_month']",
            year: "//select[@name='calendar_year']",
            previous: ".prev",
            next: ".next",
            calenderDay: "//input[@placeholder='yyyy-mm-dd']",
            dayView: ".day",
            monthView: ".month",

            //manage resources
            addNewResource: ".dokan-right",
            resourceName: ".swal2-input",
            cancelAddNewResource: ".swal2-cancel",
            confirmAddNewResource: ".swal2-confirm",
            editResource: (resourceName) => `//a[contains(text(),'${resourceName}')]/../..//a[contains(text(),'Edit')]`,
            removeResourceButton: (resourceName) => `//a[contains(text(),'${resourceName}')]/../..//button[contains(text(),'Remove')]`,

            //edit resource
            resourceTitle: "#post_title",
            availableQuantity: "#\\_wc_booking_qty",
            rangeTypeResource: ".wc_booking_availability_type > select",
            rangeFromResource: ".from_date > .date-picker",
            rangeToResource: ".to_date > .date-picker ",
            bookableResource: "//select[contains(@name,'wc_booking_availability_type')]",
            priorityResource: ".priority > input",
            addRangeResource: ".button",
            saveResource: ".dokan-btn-lg",
        },

        //announcements
        vAnnouncement: {
            seeMore: "p > a",
            backToAllNotice: ".dokan-btn",
            deleteAnnouncement: ".remove_announcement .fas",
            confirmDeleteAnnouncement: ".swal2-confirm",
            cancelDeleteAnnouncement: ".swal2-cancel",
        },

        // tools
        vTools: {
            //menus
            import: "//ul[@class='dokan_tabs']//a[contains(text(),'Import')]",
            export: "//ul[@class='dokan_tabs']//a[contains(text(),'Export')]",

            //import
            //xml
            chooseXml: "//form[@enctype='multipart/form-data']//input[@type='file']",
            importXml: "//input[@value='Import']",
            //csv
            importCsv: "#import > .dokan-btn",
            chooseCsv: "#upload",
            updateExistingProducts: "#woocommerce-importer-update-existing",
            continue: ".button",
            runTheImporter: ".button",
            viewImportLog: ".woocommerce-importer-done-view-errors",
            viewProducts: ".button",

            //export
            //xml
            all: "#export_all",
            product: "#export_product",
            variation: "#export_variation_product",
            exportXml: "//input[@value='Export']",
            //csv
            exportCsv: "#export > .dokan-btn",
            exportCustomMeta: "#woocommerce-exporter-meta",
            generateCsv: ".woocommerce-exporter-button",
        },

        //auction
        vAuction: {
            //menus
            all: "//ul[contains(@class,'dokan-listing-filter')]//a[contains(text(),'All')]",
            online: "//ul[contains(@class,'dokan-listing-filter')]//a[contains(text(),'Online')]",
            pendingReview: "//ul[contains(@class,'dokan-listing-filter')]//a[contains(text(),'Pending Review')]",
            draft: "//ul[contains(@class,'dokan-listing-filter')]//a[contains(text(),'Draft')]",

            // create auction product
            addNewActionProduct: ".dokan-btn-theme",
            productName: "#post-title",
            productShortDescription: "#content > .col-full",
            ProductImage: ".dokan-feat-image-btn",
            uploadProductImage: '#\\__wp-uploader-id-1',
            addGalleryImage: ".fa-plus",
            uploadGalleryImage: "#\\__wp-uploader-id-4",
            category: "select2-product_cat-container",
            categoryValues: ".select2-results ul li",
            productTag: ".select2-search__field",
            downloadable: "#\\_downloadable",
            virtual: "#\\_virtual",
            //general options
            itemCondition: "#\\_auction_item_condition",
            auctionType: "#\\_auction_type",
            enableProxyBiddingForThisAuctionProduct: ".dokan-form-group > .checkbox > label",
            startPrice: "#\\_auction_start_price",
            bidIncrement: "#\\_auction_bid_increment",
            reservedPrice: "#\\_auction_reserved_price",
            buyItNowPrice: "#\\_regular_price",
            auctionStartDate: "#\\_auction_dates_from",
            auctionEndDate: "#\\_auction_dates_to",
            enableAutomaticRelistingForThisAuction: "#\\_auction_automatic_relist",
            relistIfFailAfterNHours: "#\\_auction_relist_fail_time",
            relistIfNotPaidAfterNHours: "#\\_auction_relist_not_paid_time",
            relistAuctionDurationInH: "#\\_auction_relist_duration",
            //shipping
            thisProductRequiresShipping: "#\\_disable_shipping",
            weight: "#\\_weight",
            length: "#\\_length",
            width: "#\\_width",
            height: "#\\_height",
            shippingClass: "#product_shipping_class",
            shippingSettings: ".help-block > a",
            //tax
            taxStatus: "#\\_tax_status",
            taxClass: "#\\_tax_class",
            //short description
            productShortDescription: "#post-excerpt",
            //description
            productDescriptionIframe: ".dokan-auction-post-content iframe",
            productDescriptionHtmlBody: "#tinymce",

            //auction activity
            actionActivity: ".button-ml > .dokan-btn",
            backToActions: ".entry-title > #auction-clear-filter-button",
            //filter
            filterDateFrom: "#\\_auction_dates_from",
            filterDateTo: "#\\_auction_dates_to",
            filter: ".dokan-btn-theme",
            filterReset: "div > #auction-clear-filter-button",
            //search
            searchAuctionActivity: ".dokan-form-control",
            search: "//button[contains(text(),'Search') and @class='dokan-btn']",
            //add auction
            addAuctionProduct: ".dokan-btn-theme",
        },

        //support
        vSupport: {
            //menus
            allTickets: "//ul[contains(@class,'dokan-support-topic-counts')]//a[contains(text(), 'All Tickets')]",
            openTickets: "//ul[contains(@class,'dokan-support-topic-counts')]//a[contains(text(), 'Open Tickets')]",
            closedTickets: "//ul[contains(@class,'dokan-support-topic-counts')]//a[contains(text(), 'Closed Tickets')]",

            //filter
            selectCustomer: ".page-template-default",
            ticketDateFilter: "#support_ticket_date_filter",
            tickedIdOrKeyword: "#dokan-support-ticket-search-input",
            search: "//input[@class='dokan-btn' and @value='Search']",

            //manage ticket
            backToTickets: ".dokan-dashboard-content > a",
            selectTicket: ".column-primary > a",
            addReplyNote: "#comment",
            changeStatus: ".dokan-support-topic-select",
            submitReply: "#submit",
            okEmptySubmit: ".swal2-confirm",

            //close ticket
            closeTopic: ".dokan-support-status-change",
            confirmCloseTopic: ".swal2-confirm",
            cancelCloseTopic: ".swal2-cancel",
        },

        // vendor account details
        vAccountDetails: {
            firstName: "#account_first_name",
            lastName: "#account_last_name",
            email: "#account_email",
            currentPassword: "#password_current",
            NewPassword: "#password_1",
            confirmNewPassword: "#password_2",
            saveChanges: ".dokan-btn",
        },

        // search similar product
        vSearchSimilarProduct: {
            //search similar product spmv
            openSearchField: ".fa-caret-down",
            closeSearchField: ".fa-caret-up",
            searchProduct: ".input-group-center > .dokan-form-control",
            search: ".dokan-btn-search",
            orCreateNewProduct: ".footer-create-new-section > a",
            sortProduct: ".orderby",
            editProduct: "td > .dokan-btn",
            addToStore: ".dokan-spmv-clone-product",
        },

        //settings
        vSettings: {
            store: ".store > a",
            addons: ".product-addon > a",
            payment: ".payment > a",
            verification: ".verification > a",
            deliveryTime: ".delivery-time > a",
            shipping: ".shipping > a",
            shipStation: ".shipstation > a",
            socialProfile: ".social > a",
            rma: ".rma > a",
            storeSEO: ".seo > a",
        },

        //store settings
        vStoreSettings: {
            //wp image upload
            wpUploadFiles: "#menu-item-upload",
            uploadedMedia: ".attachment-preview",
            selectFiles: "//div[@class='supports-drag-drop' and @style='position: relative;']//button[@class='browser button button-hero']",
            select: "//div[@class='supports-drag-drop' and @style='position: relative;']//button[contains(@class, 'media-button-select')]",
            crop: "//div[@class='supports-drag-drop' and @style='position: relative;']//button[contains(@class, 'media-button-insert')]",
            //banner and profile image
            banner: ".dokan-banner-drag",
            bannerImage: "//div[@class='image-wrap']//img[@class='dokan-banner-img']",
            removeBannerImage: ".close.dokan-remove-banner-image",
            profilePicture: ".dokan-pro-gravatar-drag",
            profilePictureImage: "//div[@class='dokan-left gravatar-wrap']//img[@class='dokan-gravatar-img']",
            removeProfilePictureImage: ".dokan-close.dokan-remove-gravatar-image",
            //basic store info
            storeName: "#dokan_store_name",
            storeProductsPerPage: "#dokan_store_ppp",
            phoneNo: "#setting_phone",
            multipleLocation: "#multiple-store-location",
            locationName: "#store-location-name-input",
            //address
            addLocation: "#show-add-store-location-section-btn",
            editLocation: ".store-pickup-location-edit-btn",
            street: "#dokan_address\\[street_1\\]",
            street2: "#dokan_address\\[street_2\\]",
            city: "#dokan_address\\[city\\]",
            postOrZipCode: "#dokan_address\\[zip\\]",
            country: "#dokan_address_country",
            state: "#dokan_address_state",
            saveLocation: "#dokan-save-store-location-btn",
            cancelSaveLocation: "#cancel-store-location-section-btn",
            deleteSaveLocation: ".store-pickup-location-delete-btn",
            //company info
            companyName: "#settings_dokan_company_name",
            companyIdOrEuidNumber: "#settings_dokan_company_id_number",
            vatOrTaxNumber: "#setting_vat_number",
            nameOfBank: "#setting_bank_name",
            bankIban: "#setting_bank_iban",
            //email
            email: "//label[contains(text(), 'Email')]/..//input[@type='checkbox']",
            moreProducts: "//label[contains(text(), 'More products')]/..//input[@type='checkbox']",
            //map
            map: "#dokan-map-add",
            mapFirstResult: "#ui-id-3",
            //terms and conditions
            termsAndConditions: "//label[contains(text(), 'Terms and Conditions')]/..//input[@type='checkbox']",
            termsAndConditionsIframe: '#dokan_tnc_text iframe',
            termsAndConditionsHtmlBody: '#tinymce',
            //store opening closing time
            storeOpeningClosingTime: "#dokan-store-time-enable",
            chooseBusinessDays: "//label[contains(text(),'Choose Business Days')]/..//input[contains(@class,'select2-search__field')]",
            businessDaysTab: (day) => `//ul[@class='tabs']//li[@rel='store-tab-${day}']`,
            openingTime: (day) => `#opening-time-${day}`,
            closingTime: (day) => `#closing-time-${day}`,
            addNewRow: (day) => `#store-tab-${day} .added-store-opening-time > .fa`,
            deleteOneRow: ".remove-store-closing-time > .fa",
            storeOpenNotice: "//input[@name='dokan_store_open_notice']",
            storeCloseNotice: "//input[@name='dokan_store_close_notice']",
            //vacation
            goToVacation: "#dokan-seller-vacation-activate",
            closingStyle: "label .form-control",
            vacationDateRangeFrom: "#dokan-seller-vacation-date-from",
            vacationDateRangeTo: "#dokan-seller-vacation-date-to",
            setVacationMessage: "//div[@id='dokan-seller-vacation-vacation-dates']//textarea[@id='dokan-seller-vacation-message']",
            saveVacationEdit: "#dokan-seller-vacation-save-edit span",
            cancelVacationEdit: "#dokan-seller-vacation-cancel-edit",
            noVacationIsSet: "//td[contains( text(),'No vacation is set')]",
            vacationRow: "//td[@class='dokan-seller-vacation-list-action']/..",
            editSavedVacationSchedule: ".dokan-seller-vacation-list-action .fas",
            deleteSavedVacationSchedule: ".dokan-seller-vacation-remove-schedule",
            confirmDeleteSavedVacationSchedule: ".swal2-confirm",
            cancelDeleteSavedVacationSchedule: ".swal2-cancel",
            //discount
            enableStoreWideDiscount: "#lbl_setting_minimum_quantity",
            minimumOrderAmount: "#setting_minimum_order_amount",
            percentage: "#setting_order_percentage",
            //biography
            biographyIframe: '#wp-vendor_biography-wrap iframe',
            biographyHtmlBody: '#tinymce',
            //store support
            showSupportButtonInStore: "#support_checkbox",
            showSupportButtonInSingleProduct: "#support_checkbox_product",
            supportButtonText: "#dokan_support_btn_name",
            //min-max
            enableMinMaxQuantities: "#enable_vendor_min_max_quantity",
            minimumProductQuantityToPlaceAnOrder: "#min_quantity_to_order",
            maximumProductQuantityToPlaceAnOrder: "#max_quantity_to_order",
            enableMinMaxAmount: "#enable_vendor_min_max_amount",
            minimumAmountToPlaceAnOrder: "#min_amount_to_order",
            maximumAmountToPlaceAnOrder: "#max_amount_to_order",
            selectProducts: "//label[contains(text(), 'Select Products')]/..//input[contains(@class,'select2-search__field')]",
            selectAll: ".dokan-min-max-product-select-all",
            clear: ".dokan-min-max-product-clear-all",
            selectCategory: "#product_cat",

            //update settings
            updateSettings: ".dokan-btn",

        },

        //addons settings
        vAddonSettings: {
            createNewAddon: ".dokan-pa-all-addons .dokan-btn",
            createNew: "//a[normalize-space()='Create New']",
            editAddon: (addon) => `//a[contains(text(), '${addon}')]/..//a[contains(text(), 'Edit')]`,
            deleteAddon: (addon) => `//a[contains(text(), '${addon}')]/..//a[contains(text(), 'Delete')]`,
            backToAddonLists: ".back-to-addon-lists-btn",
            name: "#addon-reference",
            priority: "#addon-priority",
            productCategories: ".select2-search__field",
            //add-ons
            addField: ".wc-pao-add-field",
            type: ".wc-pao-addon-type-select",
            displayAs: ".wc-pao-addon-display-select",
            titleRequired: ".wc-pao-addon-content-name",
            formatTitle: "#wc-pao-addon-content-title-format",
            enableDescription: ".wc-pao-addon-description-enable",
            addDescription: ".wc-pao-addon-description.show",
            requiredField: ".wc-pao-addon-required-setting input",
            enterAnOption: "//input[@placeholder='Enter an option']",
            optionPriceType: ".wc-pao-addon-option-price-type",
            optionPriceInput: ".wc-pao-addon-content-price .wc_input_price",
            import: ".wc-pao-import-addons",
            export: ".wc-pao-export-addons",
            expandAll: ".wc-pao-expand-all",
            closeAll: ".wc-pao-close-all",
            update: "#submit",
            publish: "#submit",
            addonUpdateSuccessMessage: ".dokan-alert.dokan-alert-success",
        },

        //payment settings
        vPaymentSettings: {
            //paypal
            paypal: '.payment-field-paypal .dokan-form-control',

            //bank transfer
            bankAccountName: "//input[@name='settings[bank][ac_name]']",
            bankAccountNumber: "//input[@name='settings[bank][ac_number]']",
            bankName: "//input[@name='settings[bank][bank_name]']",
            bankAddress: "//textarea[@name='settings[bank][bank_addr]']",
            bankRoutingNumber: "//input[@name='settings[bank][routing_number]']",
            bankIban: "//input[@name='settings[bank][iban]']",
            bankSwiftCode: "//input[@name='settings[bank][swift]']",

            //Stripe
            ConnectWithStripe: '.dokan-stripe-connect-link',

            //paypal marketplace
            paypalMarketplace: '#vendor_paypal_email_address',
            paypalMarketplaceSigUp: '.vendor_paypal_connect',

            //razorpay
            rzSignup: ".vendor_razorpay_connect",
            rzClosePopup: ".mfp-close",
            // existing account info
            rzIHaveAlreadyAnAccount: "#dokan_razorpay_existing_user_chekbox",
            rzAccountId: "#dokan_razorpay_account_id",
            rzConnectExistingAccount: "#dokan_razorpay_vendor_register_button",
            //new account info
            rzAccountName: "#razorpay_account_name",
            rzAccountEmail: "#razorpay_account_email",
            rzYourCompanyName: "#razorpay_business_name",
            rzYourCompanyType: "#razorpay_business_type",
            rzBankAccountName: "#razorpay_beneficiary_name",
            rzBankAccountNumber: "#razorpay_account_number",
            rzBankIfscCode: "#razorpay_ifsc_code",
            rzBankAccountType: "#razorpay_account_type",
            rzConnectAccount: "#dokan_razorpay_vendor_register_button",

            //mangopay
            //mangopay payment setup options
            accountForm: ".dokan-mp-account",
            bankAccount: ".dokan-mp-bank",
            verification: ".dokan-mp-verification",
            eWallets: ".dokan-mp-wallets",

            //connect & account info
            dateOfBirth: "#dokan-mangopay-user-birthday",
            nationality: "#dokan-mangopay-user-nationality",
            typeOfUser: "#dokan-mangopay-user-status",
            typeOfBusiness: "#dokan-mangopay-business-type",
            companyNumber: "#dokan-mangopay-company-number",
            address: "#dokan-mangopay-address1",
            addressDetails: "#dokan-mangopay-address2",
            country: "#dokan-mangopay-country",
            state: "#dokan-mangopay-state",
            city: "#dokan-mangopay-city",
            postcode: "#dokan-mangopay-postcode",
            connect: "#dokan-mangopay-account-connect",
            disconnect: "#dokan-mangopay-account-disconnect",
            update: "#dokan-mangopay-account-connect",
            // bank account
            addNew: "#dokan-mp-bank-account-add-new",
            accountType: "#dokan-mangopay-vendor-acccount-type",
            //iban
            ibanIban: "#dokan-mangopay-vendor-acccount-IBAN-iban",
            ibanBic: "#dokan-mangopay-vendor-acccount-IBAN-bic",
            //gb
            gbAccountNumber: "#dokan-mangopay-vendor-acccount-GB-account_number",
            gbSortCode: "#dokan-mangopay-vendor-acccount-GB-sort_code",
            //us
            usAccountNumber: "#dokan-mangopay-vendor-acccount-US-account_number",
            usAba: "#dokan-mangopay-vendor-acccount-US-aba",
            usDepositAccountType: "#dokan-mangopay-vendor-acccount-US-datype",
            //ca    
            caBankName: "#dokan-mangopay-vendor-acccount-CA-bank_name",
            caInstitutionNumber: "#dokan-mangopay-vendor-acccount-CA-inst_number",
            caBranchCode: "#dokan-mangopay-vendor-acccount-CA-branch_code",
            caAccountNumber: "#dokan-mangopay-vendor-acccount-CA-account_number",
            //others
            othersCountry: "#dokan-mangopay-vendor-acccount-OTHER-country",
            othersBic: "#dokan-mangopay-vendor-acccount-OTHER-bic",
            othersAccountNumber: "#dokan-mangopay-vendor-acccount-OTHER-account_number",
            //account holders details
            accountHoldersName: "#dokan-mangopay-vendor-account-name",
            accountHoldersAddress: "#dokan-mangopay-vendor-account-address1",
            accountHoldersAddressDetails: "#dokan-mangopay-vendor-account-address2",
            accountHoldersCountry: "#dokan-mangopay-vendor-account-country",
            accountHoldersState: "#dokan-mangopay-vendor-account-state",
            city: "#dokan-mangopay-vendor-account-city",
            postcode: "#dokan-mangopay-vendor-account-postcode",
            submit: "#dokan-mp-bank-account-create",
            cancel: "#dokan-mp-bank-account-cancel",
            // verification
            documentType: "#dokan-kyc-file-type",
            chooseFiles: "#dokan-kyc-file",
            //ubo
            createAnUboDeclaration: "#ubo_create_declaration_button",
            addUbo: "#ubo_add_button",
            FirstName: "#dokan_mp_first_name",
            LastName: "#dokan_mp_last_name",
            DateOfBirth: "#dokan_mp_birthday",
            Nationality: "#dokan_mp_nationality",
            Address: "#dokan_mp_address_line1",
            AddressDetails: "#dokan_mp_address_line2",
            Country: "#dokan_mp_country",
            State: "#dokan_mp_region",
            City: "#dokan_mp_city",
            Postcode: "#dokan_mp_postal_code",
            BirthplaceCity: "#dokan_mp_birthplace_city_field",
            BirthplaceCountry: "#dokan_mp_birthplace_country_field",
            sendUbo: "add_button_ubo_element",
            cancelUbo: "cancel_button_ubo_element",


            submit: "#dokan-mangopay-submit-kyc",

            //custom payment method
            customPayment: '.payment-field-dokan_custom',

            //skrill
            skrill: ".payment-field-skrill",

            //update settings
            updateSettings: ".dokan-btn",
            updateSettingsSuccessMessage: ".dokan-alert.dokan-alert-success p",
        },

        //verification settings
        vVerificationSettings: {

            //wp image upload
            wpUploadFiles: "#menu-item-upload",
            uploadedMedia: ".attachment-preview",
            selectFiles: "//div[@class='supports-drag-drop' and @style='position: relative;']//button[@class='browser button button-hero']",
            select: "//div[@class='supports-drag-drop' and @style='position: relative;']//button[contains(@class, 'media-button-select')]",

            //id verification
            startIdVerification: "#dokan_v_id_click",
            cancelIdVerificationRequest: "#dokan_v_id_cancel",
            passport: "//input[@value='passport']",
            nationalIdCard: "//input[@value='national_id']",
            drivingLicense: "//input[@value='driving_license']",
            uploadPhoto: ".dokan-gravatar-drag",
            previousUploadedPhoto: "//div[@class='gravatar-wrap']//img[@class='dokan-gravatar-img']",
            removePreviousUploadedPhoto: ".dokan-close.dokan-remove-gravatar-image",
            submitId: "#dokan_v_id_submit",
            cancelSubmitId: "#dokan_v_id_cancel_form",
            idUpdateSuccessMessage: ".dokan-alert.dokan-alert-success",

            //address  verification
            startAddressVerification: "#dokan_v_address_click",
            street: "#dokan_address\\[street_1\\]",
            street2: "#dokan_address\\[street_2\\]",
            city: "#dokan_address\\[city\\]",
            postOrZipCode: "#dokan_address\\[zip\\]",
            country: "#dokan_address_country",
            state: "#dokan_address_state",
            uploadResidenceProof: "#vendor-proof-url",
            previousUploadedResidenceProof: ".vendor_img_container img",
            removePreviousUploadedResidenceProof: ".dokan-close.dokan-remove-proof-image",
            submitAddress: "#dokan_v_address_submit",
            cancelSubmitAddress: ".dokan-form-group > #dokan_v_address_cancel",
            cancelAddressVerificationRequest: "//button[@id='dokan_v_address_cancel']",
            addressUpdateSuccessMessage: ".dokan-alert.dokan-alert-success",

            //company verification
            startCompanyVerification: "#dokan_v_company_click",
            cancelCompanyVerificationRequest: "#dokan_v_company_cancel",
            uploadFiles: ".dokan-files-drag",
            cancelSelectedInfo: ".fa-times",
            submitCompanyInfo: "#dokan_v_company_submit",
            cancelSubmitCompanyInfo: ".dokan-w5 > #dokan_v_company_cancel",
            cancelCompanyVerificationRequest: ".dokan-panel-body > #dokan_v_company_cancel",
            companyInfoUpdateSuccessMessage: ".dokan-alert.dokan-alert-success"
        },

        //delivery time settings
        vDeliveryTimeSettings: {
            //delivery support
            homeDelivery: "//input[@type='checkbox' and @name='delivery_show_time_option']",
            storePickup: "#enable-store-location-pickup",
            deliveryBlockedBuffer: "#pre_order_date",
            //delivery day
            deliveryDayCheckbox: (day) => `//input[@name='delivery_day[${day}]']`,
            //tabs
            deliveryDayTab: (day) => `//ul[@class='tabs']//li[@rel='dokan-delivery-tab-${day}']`,
            //individual day settings
            openingTime: (day) => `#delivery_opening_time\\[${day}\\]`,
            closingTime: (day) => `#delivery_closing_time\\[${day}\\]`,
            // timeSlot: "//input[@placeholder='Time slot']",
            timeSlot: (day) => `#delivery_time_slot-${day}`,
            // orderPerSlot:"//input[@placeholder='Order per slot']",
            orderPerSlot: (day) => `#order_per_slot-${day}`,
            deliveryTimeUpdateSettings: ".dokan-btn.dokan-btn-danger.dokan-btn-theme",
            deliveryTimeUpdateSettingsSuccessMessage: ".dokan-message strong",
        },

        //shipping settings
        vShippingSettings: {
            //shipping policies
            clickHereToAddShippingPolicies: "//a[normalize-space()='Click here to add Shipping Policies']",
            backToZoneList: ".router-link-active",
            processingTime: "#dps_pt",
            shippingPolicy: "#\\_dps_shipping_policy",
            refundPolicy: "//label[normalize-space()='Refund Policy']/..//textarea[@class='dokan-form-control']",
            shippingPoliciesSaveSettings: ".dokan-btn-danger",

            //ZoneWise Shipping Settings
            ZonWiseAddShippingMethod: (zone) => `//a[contains(text(),'${zone}')]/../..//a[contains(text(),'Add Shipping Method')]`,
            shippingZoneCell: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..`,
            editShippingZone: (shippingZone) => `//a[contains(text(), '${shippingZone}')]/..//div//a[contains(text(), 'Edit')]`,
            addShippingMethod: "//a[contains(text(),'Add Shipping Method')]",
            shippingMethod: "#shipping_method",
            shippingMethodPopupAddShippingMethod: ".button.button-primary.button-large",
            shippingMethodCell: (shippingMethodName) => `//td[contains(text(),'${shippingMethodName}')]/..`,
            editShippingMethod: (shippingMethodName) => `//td[contains(text(),'${shippingMethodName}')]/..//div//a[contains(text(), 'Edit')]`,
            deleteShippingMethod: (shippingMethodName) => `//td[contains(text(),'${shippingMethodName}')]/..//div//a[contains(text(), 'Delete')]`,

            //edit shipping methods
            //flat rate
            flatRateMethodTitle: "#method_title",
            flatRateCost: "#method_cost",
            flatRateTaxStatus: "#method_tax_status",
            flatRateDescription: "#method_description",
            flatRateNoShippingClassCost: "#no_class_cost",
            flatRateCalculationType: "#calculation_type",
            //free shipping
            freeShippingTitle: "#method_title",
            freeShippingMinimumOrderAmount: "#minimum_order_amount",
            //local pickup
            localPickupTitle: "#method_title",
            localPickupCost: "#method_cost",
            localPickupTaxStatus: "#method_tax_status",
            localPickupDescription: "#method_description",
            //dokan table rate shipping
            tableRateShippingMethodTitle: "#table_rate_title",
            tableRateShippingTaxStatus: "//select[@name='table_rate_tax_status']",
            tableRateShippingTaxIncludedInShippingCosts: "//select[@name='table_rate_prices_include_tax']",
            tableRateShippingHandlingFee: "#table_rate_order_handling_fee",
            tableRateShippingMaximumShippingCost: "#table_rate_max_shipping_cost",
            //rates
            tableRateShippingCalculationType: "#dokan_table_rate_calculation_type",
            tableRateShippingHandlingFeePerOrder: "#dokan_table_rate_handling_fee",
            tableRateShippingMinimumCostPerOrder: "#dokan_table_rate_min_cost",
            tableRateShippingMaximumCostPerOrder: "#dokan_table_rate_max_cost",
            tableRateShippingUpdateSettings: "//input[@name='dokan_update_table_rate_shipping_settings']",
            tableRateShippingUpdateSettingsSuccessMessage: ".dokan-message Strong",
            //dokan distance rate shipping
            distanceRateShippingMethodTitle: "#distance_rate_title",
            distanceRateShippingTaxStatus: "#distance_rate_tax_status",
            distanceRateShippingTransportationMode: "#dokan_distance_rate_mode",
            distanceRateShippingAvoid: "#dokan_distance_rate_avoid",
            distanceRateShippingDistanceUnit: "#dokan_distance_rate_unit",
            distanceRateShippingShowDistance: "#dokan_distance_rate_show_distance",
            distanceRateShippingShowDuration: "#dokan_distance_rate_show_duration",
            //shipping address
            distanceRateShippingAddress1: "#dokan_distance_rate_address_1",
            distanceRateShippingAddress2: "#dokan_distance_rate_address_2",
            distanceRateShippingCity: "#dokan_distance_rate_city",
            distanceRateShippingZipOrPostalCode: "#dokan_distance_rate_postal_code",
            distanceRateShippingStateOrProvince: "#dokan_distance_rate_state_province",
            distanceRateShippingCountry: "#dokan_distance_rate_country",
            distanceRateShippingUpdateSettings: "//input[@name='dokan_update_distance_rate_shipping_settings']",
            distanceRateShippingUpdateSettingsSuccessMessage: ".dokan-message Strong",
            // edit save shipping settings
            shippingSettingsSaveSettings: ".button.button-primary.button-large",

            //save changes
            saveChanges: "//input[@value='Save Changes']",
            updateSettingsSuccessMessage: ".dokan-alert.dokan-alert-success span",

            //previous shipping settings
            previousShippingSettings: "//a[contains( text(), 'Click Here')]",
            backToZoneWiseShippingSettings: ".dokan-page-help a",
            enableShipping: "//input[@type='checkbox' and @name='dps_enable_shipping']",
            defaultShippingPrice: "#shipping_type_price",
            perProductAdditionalPrice: "#additional_product",
            perQtyAdditionalPrice: "#additional_qty",
            processingTime: "#dps_pt",
            shippingPolicy: "//label[contains(text(),'Shipping Policy')]/..//textarea[@name='dps_ship_policy']",
            refundPolicy: "//label[contains(text(),'Refund Policy')]/..//textarea[@name='dps_refund_policy']",
            shipsFrom: "//select[@name='dps_form_location']",
            shipTo: "//select[@id='dps_country_selection']",
            cost: "//input[@name='dps_country_to_price[]']",
            addLocation: ".dokan-btn-default",
            previousShippingSaveSettings: "//input[@name='dokan_update_shipping_options']",
        },

        //shipStation settings
        vShipStationSettings: {
            exportOrderStatuses: ".select2-search__field",
            shippedOrderStatus: "#select2--container",
            saveChanges: "#dokan-store-shipstation-form-submit",
        },

        //social profile settings
        vSocialProfileSettings: {
            facebook: "#settings\\[social\\]\\[fb\\]",
            twitter: "#settings\\[social\\]\\[twitter\\]",
            pinterest: "#settings\\[social\\]\\[pinterest\\]",
            linkedin: "#settings\\[social\\]\\[linkedin\\]",
            youtube: "#settings\\[social\\]\\[youtube\\]",
            instagram: "#settings\\[social\\]\\[instagram\\]",
            flicker: "#settings\\[social\\]\\[flickr\\]",
            updateSettings: ".dokan-btn.dokan-btn-danger.dokan-btn-theme",
            updateSettingsSuccessMessage: ".dokan-alert.dokan-alert-success p",
        },

        //rma settings
        vRmaSettings: {
            label: "#dokan-rma-label",
            type: "#dokan-warranty-type",
            length: "#dokan-warranty-length",
            lengthValue: "//input[@name='warranty_length_value']",
            lengthDuration: "#dokan-warranty-length-duration",
            refundReasons: ".checkbox input",
            refundPolicyIframe: 'iframe',
            refundPolicyHtmlBody: '#tinymce',
            rmaSaveChanges: "#dokan-store-rma-form-submit",
            updateSettingsSuccessMessage: ".dokan-alert.dokan-alert-success"
        },

        //store SEO settings
        vStoreSeoSettings: {
            seoTitle: "#dokan-seo-meta-title",
            metaDescription: "#dokan-seo-meta-desc",
            metaKeywords: "#dokan-seo-meta-keywords",
            facebookTitle: "#dokan-seo-og-title",
            facebookDescription: "#dokan-seo-og-desc",
            facebookImage: "//label[contains( text(), 'Facebook Image :')]/..//a[contains(@class, 'dokan-gravatar-drag')]",
            uploadFacebookImage: "#\\__wp-uploader-id-1",
            twitterTitle: "#dokan-seo-twitter-title",
            twitterDescription: "#dokan-seo-twitter-desc",
            twitterImage: "//label[contains( text(), 'Twitter Image')]/..//a[contains(@class, 'dokan-gravatar-drag')]",
            uploadTwitterImage: "#\\__wp-uploader-id-4",
            saveChanges: "#dokan-store-seo-form-submit",
        },

    },



    //--------------------------------------------customer---------------------------------------------//


    customer: {

        //customer registration
        cRegistration: {
            regEmail: "#reg_email",
            regPassword: "#reg_password",
            regCustomer: "//input[@value='customer']",
            regCustomerWelcomeMessage: "//div[@class='woocommerce-MyAccount-content']//p[contains(text(),'Hello')]",
            //register button
            register: ".woocommerce-Button",
        },

        //customer home menus
        cHomeMenus: {
            home: "//a[contains(text(),'Home')]",
            cart: "//a[contains(text(),'Cart')]",
            checkout: "//a[contains(text(),'Checkout')]",
            dashboard: "//a[contains(text(),'Dashboard')]",
            myAccount: "//a[contains(text(),'My account')]",
            myOrders: "//a[contains(text(),'My Orders')]",
            samplePage: "//a[contains(text(),'Sample Page')]",
            shop: "//a[contains(text(),'Shop')]",
            storeList: "//a[contains(text(),'Store List')]"
        },

        //customer my account
        cMyAccount: {
            dashboard: '.woocommerce-MyAccount-navigation-link--dashboard a',
            orders: '.woocommerce-MyAccount-navigation-link--orders a',
            subscriptions: '.woocommerce-MyAccount-navigation-link--subscriptions a',
            downloads: '.woocommerce-MyAccount-navigation-link--downloads a',
            addresses: '.woocommerce-MyAccount-navigation-link--edit-address a',
            paymentMethods: '.woocommerce-MyAccount-navigation-link--payment-methods a',
            rmaRequests: '.woocommerce-MyAccount-navigation-link--rma-requests a',
            accountDetails: '.woocommerce-MyAccount-navigation-link--edit-account a',
            vendors: 'woocommerce-MyAccount-navigation-link--following a',
            sellerSupportTickets: '.woocommerce-MyAccount-navigation-link--support-tickets a',
            bookings: '.woocommerce-MyAccount-navigation-link--bookings a',
            auctions: '.woocommerce-MyAccount-navigation-link--auctions-endpoint a',
            logout: '.woocommerce-MyAccount-navigation-link--customer-logout a',
        },

        //customer dashboard
        cDashboard: {
            // become vendor
            becomeVendor: '//a[contains(text(),"Become a Vendor")]',
            firstName: '#first-name',
            lastName: '#last-name',
            shopName: '#company-name',
            shopUrl: '#seller-url',
            address: '#seller-address',
            phone: '#shop-phone',
            companyName: '#dokan-company-name',
            companyId: '#dokan-company-id-number',
            vatNumber: '#dokan-vat-number',
            bankName: '#dokan-bank-name',
            bankIban: '#dokan-bank-iban',
            termsAndConditions: '#tc_agree',
            subscriptionPack: "#dokan-subscription-pack",
            becomeAVendor: '.dokan-btn',

            //become wholesale customer
            becomeWholesaleCustomer: '#dokan-become-wholesale-customer-btn',
            wholesaleRequestReturnMessage: ".dokan-wholesale-migration-wrapper div",
        },

        //customer orders
        cOrders: {
            // request warranty
            view: (orderNumber) => `//a[contains(text(),'${orderNumber}')]/../..//a[contains(@class,'woocommerce-button button view')]`,
            recentOrdersWarrantyRequest: (orderNumber) => `//td[@class='${orderNumber}']/..//a[@class='button request_warranty']`,
            ordersWarrantyRequest: (orderNumber) => `//a[contains(text(),'#${orderNumber}')]/../..//a[@class='woocommerce-button button request_warranty']`,
            warrantyRequestItemCheckbox: (productName) => `//a[contains(text(),'${productName}')]/../..//input[@type='checkbox' and contains(@name,'request_item')]`,
            warrantyRequestItemQuantity: (productName) => `//a[contains(text(),'${productName}')]/../..//select[contains(@name,'request_item_qty')]`,
            warrantyRequestType: "#type",
            warrantyRequestReason: "#reasons",
            warrantyRequestDetails: "#warranty_request_details",
            warrantySubmitRequest: ".dokan-btn",

            //order details
            OrderDetailsLInk: (orderNumber) => `//a[contains(text(), '#${orderNumber}')]/../..//a[contains(text(), 'View')]`,
            orderNumber: "//div[@class='woocommerce-MyAccount-content']//p//mark[@class='order-number']",
            orderDate: "//div[@class='woocommerce-MyAccount-content']//p//mark[@class='order-date']",
            orderStatus: "//div[@class='woocommerce-MyAccount-content']//p//mark[@class='order-status']",
            subTotal: "//th[contains(text(),'Subtotal:')]/..//span",
            orderDiscount: "//th[contains(text(),'Order Discount:')]/..//span",
            quantityDiscount: "//th[contains(text(),'Quantity Discount:')]/..//span",
            discount:"//th[text()='Discount:']/..//span",
            shipping: "//th[contains(text(),'Shipping:')]/..//td", //TODO:delete this when shipping method is fixed
            shippingCost: "//th[contains(text(),'Shipping:')]/..//span",
            shippingMethod: "//th[contains(text(),'Shipping:')]/..//small",
            tax: "//th[contains(text(),'Tax:')]/..//span",
            paymentMethod: "//th[contains(text(),'Payment method:')]/..//td",
            orderTotal: "//th[contains(text(),'Total:')]/..//span",
        },

        //customer subscription
        cSubscription: {
            view: (orderNumber) => `//a[contains(text(),'Order #${orderNumber}')]/../..//a[@class="woocommerce-button button view"]`,
        },

        //customer downloads
        cDownloads: {
            view: (orderNumber) => `//a[contains(text(),'Order #${orderNumber}')]/../..//a[@class="woocommerce-button button view"]`,
        },

        //customer address
        cAddress: {
            //billing address
            editBillingAddress: ".u-column1.col-1 .edit",
            editBillingAddress1: ".edit", // when shipping disabled
            billingFirstName: "#billing_first_name",
            billingLastName: "#billing_last_name",
            billingCompanyName: "#billing_company",
            billingCompanyIDOrEuidNumber: "#billing_dokan_company_id_number",
            billingVatOrTaxNumber: "#billing_dokan_vat_number",
            billingNameOfBank: "#billing_dokan_bank_name",
            billingBankIban: "#billing_dokan_bank_iban",
            billingCountryOrRegion: "#select2-billing_country-container",
            billingCountryOrRegionInput: '.select2-search__field',
            billingCountryOrRegionValues: ".select2-results ul li",
            billingStreetAddress: "#billing_address_1",
            billingStreetAddress2: "#billing_address_2",
            billingTownCity: "#billing_city",
            billingState: "#select2-billing_state-container",
            billingStateInput: '.select2-search__field',
            billingStateValues: ".select2-results ul li",
            billingZipCode: "#billing_postcode",
            billingPhone: "#billing_phone",
            billingEmailAddress: "#billing_email",
            billingSaveAddress: "//button[@name='save_address']",

            //shipping address
            editShippingAddress: ".u-column2.col-2 .edit",
            shippingFirstName: "#shipping_first_name",
            shippingLastName: "#shipping_last_name",
            shippingCompanyName: "#shipping_company",
            shippingCountryOrRegion: "#select2-shipping_country-container",
            shippingCountryOrRegionInput: '.select2-search__field',
            shippingCountryOrRegionValues: ".select2-results ul li",
            shippingStreetAddress: "#shipping_address_1",
            shippingStreetAddress2: "#shipping_address_2",
            shippingTownCity: "#shipping_city",
            shippingState: "#select2-shipping_state-container",
            shippingStateInput: '.select2-search__field',
            shippingStateValues: ".select2-results ul li",
            shippingZipCode: "#shipping_postcode",
            shippingSaveAddress: "//button[@name='save_address']",

            //success message
            successMessage: ".woocommerce-message",

        },

        //customer rma requests
        cRma: {
            view: (orderNumber) => `//a[contains(text(),'Order #${orderNumber}')]/../..//a[@class="woocommerce-button button view"]`,
            // Conversations
            message: "#message",
            sendMessage: ".woocommerce-button"


        },

        // customer payment methods
        cPaymentMethods: {
            deleteMethod: ".delete",
            addPaymentMethod: ".woocommerce-MyAccount-content .button",

            //stripe card
            stripeCardIframe: '#dokan-stripe-card-element iframe',
            stripeCardNumber: ".CardNumberField-input-wrapper .InputElement",
            // stripeCardNumber1: "//input[@name='cardnumber']/..",
            // stripeCardNumber: "//input[@name='cardnumber']",
            stripeCardExpiryDate: ".CardField-expiry .InputElement",
            stripeCardCvc: ".CardField-cvc .InputElement",

            addPaymentMethodCard: "#place_order",

        },

        // customer account details
        cAccountDetails: {
            firstName: "#account_first_name",
            lastName: "#account_last_name",
            displayName: "#account_display_name",
            email: "#account_email",
            currentPassword: "#password_current",
            NewPassword: "#password_1",
            confirmNewPassword: "#password_2",
            saveChanges: ".woocommerce-Button",
        },

        // customer followed vendors
        cVendors: {
            visitStore: (storeName) => `//a[contains(text(),'${storeName}')]/../../../../..//a[@title='Visit Store']`,
            followUnFollowStore: (storeName) => `//a[contains(text(),'${storeName}')]/../../../../..//button[contains(@class,'dokan-follow-store-button')]`,
        },

        // customer support tickets
        cSupportTickets: {
            //menus
            allTickets: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'All Tickets')]",
            openTickets: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'Open Tickets')]",
            closedTickets: "//ul[contains(@class,'subsubsub')]//a[contains(text(),'Closed Tickets')]",

            addReply: "#comment",
            submitReply: "#submit",
        },

        // customer bookings
        cBookings: {
            view: (orderNumber) => `//a[contains(text(),'Order #${orderNumber}')]/../..//a[@class="woocommerce-button button view"]`,
        },

        // customer auctions settings
        cAuctions: {
            view: (orderNumber) => `//a[contains(text(),'Order #${orderNumber}')]/../..//a[@class="woocommerce-button button view"]`,
        },

        //customer shop page
        cShop: {

            shopPageHeader: ".woocommerce-products-header__title",
            //filter
            searchProduct: ".dokan-form-control",
            searchedProductName: ".woocommerce-loop-product__title",
            productDetailsViewLink: ".woocommerce-LoopProduct-link.woocommerce-loop-product__link img",
            location: ".location-address input",
            radiusSlider: ".dokan-range-slider",
            selectCategory: "#product_cat",
            radius: ".dokan-range-slider",
            sorting: ".woocommerce-ordering .orderby",
            search: ".dokan-btn",
            //cart
            addToCart: ".add_to_cart_button",
            viewCart: ".added_to_cart",
            bidNow: '.button.product_type_auction',

            //pagination
            previous: ".prev",
            next: ".next",
        },

        //customer store page
        cStoreList: {
            storeListPageHeader: ".entry-title",
            //search vendor
            searchVendors: ".store-search-input",
            location: ".location-address input",
            radiusSlider: ".dokan-range-slider",
            //filter
            filter: ".dokan-store-list-filter-button",
            featured: "#featured",
            openNow: "#open-now",
            rating: (star) => `.star-${star}`,
            apply: "#apply-filter-btn",
            //sortby
            sortBy: "#stores_orderby",
            //view style
            gridView: ".dashicons-screenoptions",
            listView: ".dashicons-menu-alt",

            visitStore: (storeName) => `//a[text()='${storeName}']/../../../../..//a[@title='Visit Store']`,
            // visitStore: (storeName) => `//a[contains(text(),'${storeName}')]/../../../../..//a[@title='Visit Store']`,
            followUnFollowStore: (storeName) => `//a[text()='${storeName}']/../../../../..//button[contains(@class,'dokan-follow-store-button')]`,
            // followUnFollowStore: (storeName) => `//a[contains(text(),'${storeName}')]/../../../../..//button[contains(@class,'dokan-follow-store-button')]`,
            currentStoreFollowStatus: (storeName) => `//a[text()='${storeName}']/../../../../..//button[contains(@class,'dokan-follow-store-button')]//span[@class='dokan-follow-store-button-label-current']`
        },

        //customer header cart
        cHeaderCart: {
            //cartContent
            cartContent: ".cart-contents .woocommerce-Price-amount",
            removeItem: ".remove",
            viewCart: "//p[contains(@class,'woocommerce-mini-cart__buttons')]//a[contains(text(),'View cart')]",
            checkout: "//p[contains(@class,'woocommerce-mini-cart__buttons')]//a[contains(text(),'Checkout')]",
        },

        // customer single store 
        cSingleStore: {
            //products
            products: "//div[@class='dokan-store-tabs']//a[contains(text(),'Products')]",
            // reviews
            reviews: "//div[@class='dokan-store-tabs']//a[contains(text(),'Reviews')]",
            writeAReview: ".add-review-btn",
            editReview: ".edit-review-btn",
            closeReviewPopup: ".mfp-close",
            rating: '.jq-ry-rated-group.jq-ry-group',
            reviewTitle: "#dokan-review-title",
            reviewMessage: "#dokan-review-details",
            submitReview: "#support-submit-btn",
            submittedReview: (reviewMessage) => `//div[@class='review_comment_container']//div[@class='description']// p[text()='${reviewMessage}']`,
            //follow store
            follow: ".dokan-follow-store-button",
            //get Support
            getSupport: ".dokan-store-support-btn",
            closeGetSupportPopup: ".mfp-close",
            subject: "#dokan-support-subject",
            getSupportOrderId: ".dokan-select",
            message: "#dokan-support-msg",
            submitGetSupport: "#support-submit-btn",
            //share store
            share: ".dokan-share-btn",
            facebook: ".fa-facebook",
            twitter: ".fa-twitter",
            linked: ".fa-linkedin",
            pinterest: ".fa-pinterest",
            mail: ".fa-at",
            //open now
            openNow: ".fa.fa-angle-down",
            //search product
            productName: ".product-name-search",
            search: ".search-store-products",
            //sorting
            sortBy: ".orderby",
        },

        // customer single product
        cSingleProduct: {
            //product details
            productTitle: ".product_title.entry-title",
            quantity: ".quantity .qty",
            addToCart: ".single_add_to_cart_button",
            viewCart: ".woocommerce-message > .button",

            //get support
            getSupport: ".dokan-store-support-btn-product",
            closeGetSupportPopup: ".mfp-close",
            subject: "#dokan-support-subject",
            getSupportOrderId: ".dokan-select",
            message: "#dokan-support-msg",
            submitGetSupport: "#support-submit-btn",

            //report abuse
            reportAbuse: ".dokan-report-abuse-button",
            reportReasonByNumber: (reasonNumber) => `li:nth-child(${reasonNumber}) input`, //by number
            reportReasonByName: (reasonName) => `//input[@value='${reasonName}']/..`, //by name
            reportDescription: ".dokan-form-control",
            reportSubmit: "#dokan-report-abuse-form-submit-btn",
            reportSubmitSuccessMessage: "#swal2-html-container",
            confirmReportSubmit: ".swal2-confirm",

            //other available vendor
            OtherAvailableVendorViewStore: ".fa-external-link-alt",
            OtherAvailableVendorViewProduct: ".view",
            OtherAvailableVendorAddToCart: ".fa-shopping-cart",

            //product menus
            description: "#tab-title-description a",
            reviews: "#tab-title-reviews",
            vendorInfo: "#tab-title-seller a",
            location: "#tab-title-geolocation a",
            moreProducts: "#tab-title-more_seller_product a",
            warrantyPolicy: "#tab-title-refund_policy a",
            productEnquiry: "#tab-title-seller_enquiry_form a",

            // product reviews
            rating: (star) => `.star-${star}`,
            reviewMessage: "#comment",
            submitReview: "#submit",
            submittedReview: (reviewMessage) => `//div[@class='comment_container']//div[@class='description']// p[text()='${reviewMessage}']`,
            awaitingApprovalReview: (reviewMessage) => `//div[@class='comment_container']//div[@class='description']// p[text()='${reviewMessage}']/../..//p//em[@class='woocommerce-review__awaiting-approval']`,
            duplicateCommentAlert: "#error-page .wp-die-message p",
            backFromDuplicateCommentAlert: "//a[contains(text(),'« Back')]",
            //product enquiry
            enquiryMessage: "#dokan-enq-message",
            submitEnquiry: ".dokan-btn-theme",
            submitEnquirySuccessMessage: ".alert.alert-success",
        },

        // customer cart
        cCart: {
            cartPageHeader: ".entry-title",
            //edit cart
            removeItem: (productName) => `//a[contains(text(),'${productName}')]/../..//a[@class='remove']`,
            quantity: (productName) => `//a[contains(text(),'${productName}')]/../..//input[@class='input-text qty text']`,
            couponCode: "#coupon_code",
            applyCoupon: "//button[@name='apply_coupon']",
            removeCoupon: (couponCode) => `.cart-discount.coupon-${couponCode.toLowerCase()} .woocommerce-remove-coupon`,
            updateCart: "//button[@name='update_cart']",
            //shipping methods
            shippingMethod: (vendorName, shippingMethod) => `//th[contains(text(),'Shipping:  ${vendorName}')]/..//label[contains(text(),'${shippingMethod}')]/..//input`, // for vendor-wise or admin shipping method
            vendorShippingMethod: (shippingMethod) => `//label[contains(text(),'${shippingMethod}')]/..//input`, //for unique shipping method
            //proceed To Checkout
            proceedToCheckout: ".checkout-button.button.wc-forward",

            //remove all item
            productCrossIcon: ".product-remove a",
            cartEmptyMessage: '.cart-empty.woocommerce-info',

        },

        //customer checkout
        cCheckout: {

            checkoutPageHeader: ".entry-title",
            // billing details
            billingFirstName: "#billing_first_name",
            billingLastName: "#billing_last_name",
            billingCompanyName: "#billing_company",
            billingCompanyIDOrEuidNumber: "#billing_dokan_company_id_number",
            billingVatOrTaxNumber: "#billing_dokan_vat_number",
            billingNameOfBank: "#billing_dokan_bank_name",
            billingBankIban: "#billing_dokan_bank_iban",
            billingCountryOrRegion: "#select2-billing_country-container",
            billingCountryOrRegionValues: ".select2-results ul li",
            billingStreetAddress: "#billing_address_1",
            billingStreetAddress2: "#billing_address_2",
            billingTownCity: "#billing_city",
            billingPhone: "#billing_phone",
            billingEmailAddress: "#billing_email",
            billingState: "#select2-billing_state-container",
            billingStateValues: ".select2-results ul li",
            billingZipCode: "#billing_postcode",

            //shipping details
            shipToADifferentAddress: "#ship-to-different-address-checkbox",
            shippingFirstName: "#shipping_first_name",
            shippingLastName: "#shipping_last_name",
            shippingCompanyName: "#shipping_company",
            shippingCountryOrRegion: "select2-shipping_country-container",
            shippingCountryOrRegionValues: ".select2-results ul li",
            shippingStreetAddress: "#shipping_address_1",
            shippingStreetAddress2: "#shipping_address_2",
            shippingTownCity: "#shipping_city",
            shippingState: "select2-shipping_state-container",
            shippingStateValues: ".select2-results ul li",
            shippingZipCode: "#shipping_postcode",

            //order comments
            orderComments: "#order_comments",

            //shipping methods
            shippingMethod: (vendorName, shippingMethod) => `//th[contains(text(),'Shipping:  ${vendorName}')]/..//label[contains(text(),'${shippingMethod}')]/..//input`, // for vendor-wise or admin shipping method
            vendorShippingMethod: (shippingMethod) => `//label[contains(text(),'${shippingMethod}')]/..//input`, //for unique shipping method

            //payment methods
            directBankTransfer: ".payment_method_bacs label",
            checkPayments: ".payment_method_cheque label",
            cashOnDelivery: ".payment_method_cod label",
            paypalAdaptive: ".payment_method_dokan_paypal_adaptive label",
            wireCardCreditCard: ".payment_method_dokan-moip-connect label",
            paypalMarketPlace: ".wc_payment_method.payment_method_dokan_paypal_marketplace label",
            stripeExpress: ".wc_payment_method.payment_method_dokan_stripe_express label",
            //place order
            placeOrder: "#place_order"

        },

        cPayWithStripe: {
            strip: "#payment_method_dokan-stripe-connect",
            // strip1:"..payment_method_dokan-stripe-connect label",
            userNewPaymentMethod: "#wc-dokan-stripe-connect-payment-token-new",
            cardNumber: "//input[@name='cardnumber']",
            expDate: "//input[@name='exp-date']",
            cvc: "//input[@name='cvc']",
            savePaymentInformation: "#wc-dokan-stripe-connect-new-payment-method",
        },

        cPayWithPaypalMarketPlace: {
            paypalMarketPlace: ".payment_method_dokan_paypal_marketplace label"
        },

        cPayWithRazorpay: {
            razorPay: ".payment_method_dokan_razorpay label"
        },

        cPayWithMangoPay: {
            mangoPay: ".payment_method_dokan_mangopay label",
            creditCard: "//input[@name='dokan_mangopay_payment_type']",
            cardType: "#dokan-mangopay-card-type",
            registeredCard: "#dokan-mangopay-payment-type-registeredcard",
            registerCardType: "#registered_card_type",
            cardNumber: "#dokan-mp-ccnumber",
            cvc: "#dokan-mp-cccrypto",
            expDateMonth: "#preauth_ccdate_month",
            expDateYear: "#preauth_ccdate_year",
            register: "#save_preauth_card_button",
        },

        cPayWithStripeExpress: {
            savedTestCard4242: "//label[contains(text(),'Visa ending in 4242')]/..//input",
            userNewPaymentMethod: "#wc-dokan_stripe_express-payment-token-new",
            savePaymentInformation: "#wc-dokan_stripe_express-new-payment-method",
            stripeExpressIframe: "#dokan-stripe-express-element iframe",
            creditCard: "#card-tab",
            gPay: "#google_pay-tab",
            iDeal: "#ideal-tab",
            iDealBanks: "#Field-bankInput",
            cardNumber: "#Field-numberInput",
            expDate: "#Field-expiryInput",
            cvc: "#Field-cvcInput",
        },

        cOrderReceived: {
            orderReceivedPageHeader: ".entry-title",

            orderNumber: ".woocommerce-order-overview__order.order strong",
            orderDate: ".woocommerce-order-overview__date.date strong",
            email: ".woocommerce-order-overview__email.email strong",
            total: ".woocommerce-order-overview__total.total strong",
            paymentMethod: ".woocommerce-order-overview__payment-method.method strong",

            //order details
            subTotal: "//th[normalize-space()='Subtotal:']//..//span",
            shipping: "//th[normalize-space()='Shipping:']//..//td", //TODO: delete this line when localhost gets fixed
            shippingCost: "//th[normalize-space()='Shipping:']/..//span",
            shippingMethod: "//th[normalize-space()='Shipping:']/..//small",
            tax: "//th[normalize-space()='Tax:']//..//span",
            orderPaymentMethod: "//th[normalize-space()='Payment method:']//..//td",
            orderTotal: "//th[normalize-space()='Total:']//..//span",
        },

        cDokanSelector: {
            dokanAlertSuccessMessage: ".white-popup.dokan-alert-success",
            dokanAlertClose: ".mfp-close"

        },

        cWooSelector: {
            wooCommerceSuccessMessage: ".woocommerce-message",
            wooCommerceError: ".woocommerce .woocommerce-error",
            // wooCommerceError: ".woocommerce_error",
        },

        cBookings: {
            bookNow: ".wc-bookings-booking-form-button",
        },
        cAuctions: {
            bidValue: "//input[@name='bid_value']",
            plus: "//input[@value='+']",
            minus: "//input[@value='-']",
            bid: ".bid_button",
        },

    },



}