Test Cases for Tourist E-Wallet – Back Office
=============================================

This markdown document summarizes the test cases from the provided CSV. Each test case is presented with clear headings and bullet points to make it easy for AI coding tools to understand.

### TC\_Tourist\_E-Wallet\_BO\_0001 – Login email and password Success

*   **Function:** Login
    
*   **Pre-Conditions:** User exists and is Active; Valid email and password
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Enter valid email
        
    *   Enter valid password
        
    *   Click Login
        
*   **Test Data:** ekkachai.n+1@enabridge.aiP@ssw0rd1234
    
*   **Expected Result:** Users can log in to the system
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0002 – email and password Empty

*   **Function:** Login
    
*   **Pre-Conditions:** Login page is displayed
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Leave email empty
        
    *   Leave password empty
        
    *   Click Login
        
*   **Test Data:** No input
    
*   **Expected Result:** The system does not allow login, and the login button is disabled.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0003 – input email and password invalid

*   **Function:** Login
    
*   **Pre-Conditions:** Login page is displayed
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Enter invalid email
        
    *   Enter invalid password
        
    *   Click Login
        
*   **Test Data:** ekkachai.n+1@enabridge.aiWrongPass123
    
*   **Expected Result:** The system does not allow login, and an inline error message ‘The system does not allow login’ is displayed.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0004 – Invalid email format.

*   **Function:** Login
    
*   **Pre-Conditions:** Login page is displayed
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Enter email in invalid format
        
    *   Enter any password
        
    *   Click Login
        
*   **Test Data:** ekkachai.n+1enabridge.aiP@ssw0rd1234
    
*   **Expected Result:** The system does not allow login, and an inline error message ‘The system does not allow login’ is displayed.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0005 – input password invalid

*   **Function:** Login
    
*   **Pre-Conditions:** Valid email exists
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Enter valid email
        
    *   Enter invalid password
        
    *   Click Login
        
*   **Test Data:** ekkachai.n+1@enabridge.ai123456
    
*   **Expected Result:** The system does not allow login, and an inline error message ‘The system does not allow login’ is displayed.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0006 – input email but No input password

*   **Function:** Login
    
*   **Pre-Conditions:** Login page is displayed; Valid email exists
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Enter email
        
    *   Leave password empty
        
    *   Click Login
        
*   **Test Data:** ekkachai.n+1@enabridge.ai
    
*   **Expected Result:** Login is not allowed, and the login button is disabled.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0007 – No input email but input password

*   **Function:** Login
    
*   **Pre-Conditions:** Login page is displayed
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Leave email empty
        
    *   Enter password
        
    *   Click Login
        
*   **Test Data:** P@ssw0rd1234
    
*   **Expected Result:** Login is not allowed, and the login button is disabled.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0008 – input email Valid but input password invalid

*   **Function:** Login
    
*   **Pre-Conditions:** Valid email exists
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Enter valid email
        
    *   Enter invalid password
        
    *   Click Login
        
*   **Test Data:** ekkachai@enabridge.aiP@ssw0rd1234
    
*   **Expected Result:** The system does not allow login, and an inline error message ‘The system does not allow login’ is displayed.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0009 – Forgot passowrd Success

*   **Function:** Login
    
*   **Pre-Conditions:** Active user exists; Email service available
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Click Forgot password
        
    *   Enter registered email
        
    *   Click Submit
        
    *   click "set password" button from Email
        
    *   input New password
        
    *   input confirm password
        
    *   click Reset password button
        
*   **Test Data:** input New passwordinput confirm password
    
*   **Expected Result:** System allows users to use the Forgot Password feature.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0010 – Forgot passowrd input Email InValid

*   **Function:** Login
    
*   **Pre-Conditions:** Email does not exist
    
*   **Test Steps:**
    
    *   Open Forgot password page
        
    *   Enter invalid or unregistered email
        
    *   Click Submit
        
*   **Test Data:** ekkachai@gmoil.ai
    
*   **Status:** Failed
    
*   **Defect:** ระบบไม่แสดง inline error และพาไปหน้า login
    

retest แล้วยัง fail

### TC\_Tourist\_E-Wallet\_BO\_0011 – login new password success

*   **Function:** Login
    
*   **Pre-Conditions:** Password reset completed
    
*   **Test Steps:**
    
    *   Open Login page
        
    *   Enter valid email
        
    *   Enter new password
        
    *   Click Login
        
*   **Test Data:** ekkachai.n+1@enabridge.aiNewP@ssw0rd123
    
*   **Expected Result:** The user can log in successfully using the new password.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0012 – Change password success

*   **Function:** Login
    
*   **Pre-Conditions:** User is logged in
    
*   **Test Steps:**
    
    *   Navigate to Change Password
        
    *   Enter correct old password
        
    *   Enter new password
        
    *   Enter matching confirm password
        
    *   Click Save
        
*   **Status:** Failed
    
*   **Defect:** กด Change password แล้วไม่มี Old password
    

### TC\_Tourist\_E-Wallet\_BO\_0013 – Change password Input "Old password" "New password" and "Confirm password" Same

*   **Function:** Login
    
*   **Pre-Conditions:** User is logged in
    
*   **Test Steps:**
    
    *   Open Change Password page
        
    *   Enter old password
        
    *   Enter new password same as old password
        
    *   Enter confirm password same as old password
        
    *   Click Save
        
*   **Status:** Failed
    
*   **Defect:** กด Change password แล้วระบบพากลับไปหน้า Login
    

### TC\_Tourist\_E-Wallet\_BO\_0014 – Change password Input "New password" and "Confirm password" don't match

*   **Function:** Login
    
*   **Pre-Conditions:** User is logged in
    
*   **Test Steps:**
    
    *   Open Change Password page
        
    *   Enter correct old password
        
    *   Enter new password
        
    *   Enter different confirm password
        
    *   Click Save
        
*   **Status:** Failed
    
*   **Defect:** กด Change password แล้วระบบพากลับไปหน้า Login
    

### TC\_Tourist\_E-Wallet\_BO\_0015 – Set New Input  "New password" and "Confirm new password" Don't match

*   **Function:** Login
    
*   **Pre-Conditions:** Setup link valid
    
*   **Test Steps:**
    
    *   Open Set New Password page
        
    *   Enter new password
        
    *   Enter different confirm password
        
    *   Click Confirm
        
*   **Status:** Failed
    
*   **Defect:** ระบบไม่แสดง inline Error
    

### TC\_Tourist\_E-Wallet\_BO\_0016 – Login Role Matrix check Success

*   **Function:** Login
    
*   **Pre-Conditions:** User is logged in; Role configured
    
*   **Status:** Next phase
    

### TC\_Tourist\_E-Wallet\_BO\_0017 – Sign out Success

*   **Function:** Login
    
*   **Pre-Conditions:** User is logged in
    
*   **Test Steps:**
    
    *   Click Sign out / Logout
        
    *   Confirm logout
        
*   **Test Data:** ekkachai.n+1@enabridge.ai
    
*   **Expected Result:** Logout Success
    
*   **Status:** Passed
    
*   **Defect:** Sign out ไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0018 – Select View Button "Payment" Transactions Detail

*   **Function:** Dashboard
    
*   **Pre-Conditions:** User is logged in; Payment transaction exists
    
*   **Test Steps:**
    
    *   Select menu Dashboard
        
    *   Select Transaction Tabs "Payment"
        
    *   Select View Button
        
*   **Test Data:** Existing Payment transaction in the system
    
*   **Expected Result:** The system allows users to click the button to view Payment Transaction Details.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0019 – Check Transactions Detail "Payment"

*   **Function:** Dashboard
    
*   **Pre-Conditions:** User is logged in; Payment transaction exists
    
*   **Test Steps:**
    
    *   Select menu Dashboard
        
    *   Select Transaction Tabs "Payment"
        
    *   Select View Button
        
*   **Test Data:** Existing Payment transaction in the system
    
*   **Expected Result:** The system displays complete Payment Transaction Details.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0020 – Select View Button "Top-up" Transactions Detail

*   **Function:** Dashboard
    
*   **Pre-Conditions:** User is logged in; Top-up transaction exists
    
*   **Test Steps:**
    
    *   Select menu Dashboard
        
    *   Select Transaction Tabs "Top-up"
        
    *   Select View Button
        
*   **Test Data:** Top-up transaction with status = Success
    
*   **Expected Result:** Payment, Top-up tabs are displayed correctly.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0021 – Check Transactions Detail "Top-up"

*   **Function:** Dashboard
    
*   **Pre-Conditions:** User is logged in; Top-up transaction exists
    
*   **Test Steps:**
    
    *   Select menu Dashboard
        
    *   Select Transaction Tabs "Top-up"
        
    *   Select View Button
        
*   **Test Data:** Top-up transaction with status = Success
    
*   **Expected Result:** system displays only Payment transactions
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0022 – Select View Button "Withdrawal" Transactions Detail

*   **Function:** Dashboard
    
*   **Pre-Conditions:** User is logged in; Withdrawal transaction exists
    
*   **Test Steps:**
    
    *   Select menu Dashboard
        
    *   Select Transaction Tabs "Withdrawal"
        
    *   Select View Button
        
*   **Test Data:** Withdrawal transaction with status = Success
    
*   **Expected Result:** The system displays only Withdrawal transactions.”
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0023 – Check "Search" at Payment

*   **Function:** Dashboard
    
*   **Pre-Conditions:** User is logged in; Payment transactions exist
    
*   **Test Steps:**
    
    *   Select menu Dashboard
        
    *   Select Search
        
    *   input Client name, Wallet ID or Transaction ID
        
*   **Test Data:** input Client name, Wallet ID, Transaction ID
    
*   **Expected Result:** The system allows users to search transactions.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0024 – Check "Filter Status" at

*   Payment
    
*   Top-up
    
*   Withdrawal
    
*   **Function:** Dashboard
    
*   **Pre-Conditions:** User is logged in; Payment transactions exist
    
*   **Test Steps:**
    
    *   Payment
        
    
    *   Top-up
        
    
    *   Withdrawal
        
*   **Test Data:** Select Search "Filter Status
    
*   **Expected Result:** The system displays data according to the selected criteria.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0025 – Check "View" Wallet Detail

*   **Function:** Wallet Management
    
*   **Pre-Conditions:** User is logged in; Wallet exists
    
*   **Test Steps:**
    
    *   Select menu Wallet Management
        
    *   Select View Button
        
*   **Test Data:** Wallet with existing balance
    
*   **Expected Result:** The system allows users to click the View button.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0026 – View "Transactions History"

*   **Function:** Wallet Management
    
*   **Pre-Conditions:** User is logged in; Wallet has transaction history
    
*   **Test Steps:**
    
    *   Select menu Transactions History
        
    *   Select View Button
        
*   **Test Data:** Existing wallet with transactions
    
*   **Expected Result:** The system displays the transaction history of the selected wallet
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0027 – View "Audit Log"

*   **Function:** Wallet Management
    
*   **Pre-Conditions:** User is logged in; Audit log exists
    
*   **Test Steps:**
    
    *   Select menu Wallet Management
        
    *   Select View Button
        
*   **Test Data:** Existing wallet with audit records
    
*   **Expected Result:** The system displays audit log records correctly
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0028 – UnFreeze Wallet Success

*   **Function:** Wallet Management
    
*   **Pre-Conditions:** User is logged in; Wallet is Frozen
    
*   **Test Steps:**
    
    *   Select menu Wallet Management
        
    *   Select Freeze Button
        
*   **Test Data:** Frozen wallet
    
*   **Expected Result:** Wallet status changes to Active and the action is recorded
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0029 – A payment is attempted while the wallet is frozen.

*   **Function:** Wallet Management
    
*   **Pre-Conditions:** Wallet is Frozen
    
*   **Test Steps:**
    
    *   Initiate Payment
        
    *   Select frozen wallet
        
    *   Enter payment details
        
    *   Submit
        
*   **Test Data:** Frozen wallet, valid payment
    
*   **Expected Result:** The system does not allow payment and shows a wallet frozen message
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0030 – View Transactions Detail "Top-up"

*   **Function:** Transaction History
    
*   **Pre-Conditions:** User is logged in; Top-up transaction exists
    
*   **Test Steps:**
    
    *   Go to Transactions menu
        
    *   Select Top-up tab
        
    *   Select a transaction
        
    *   Click View
        
*   **Test Data:** Existing Top-up transaction
    
*   **Expected Result:** The system displays complete Top-up Transaction Details
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0031 – View Transactions Detail "Payment"

*   **Function:** Transaction History
    
*   **Pre-Conditions:** User is logged in; Payment transaction exists
    
*   **Test Steps:**
    
    *   Go to Transactions menu
        
    *   Select Payment tab
        
    *   Select a transaction
        
    *   Click View
        
*   **Test Data:** Existing Payment transaction
    
*   **Expected Result:** The system displays complete Payment Transaction Details
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0032 – View Transactions Detail "Withdrawal"

*   **Function:** Transaction History
    
*   **Pre-Conditions:** User is logged in; Withdrawal transaction exists
    
*   **Test Steps:**
    
    *   Go to Transactions menu
        
    *   Select Withdrawal tab
        
    *   Select a transaction
        
    *   Click View
        
*   **Test Data:** Existing Withdrawal transaction
    
*   **Expected Result:** The system displays complete Withdrawal Transaction Details
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0033 – View Button KYC Management page

*   **Function:** KYC Management
    
*   **Pre-Conditions:** User is logged in; Permission granted; Tag 29 enabled
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0034 – KYC Management Detail Low

*   **Function:** KYC Management
    
*   **Pre-Conditions:** User is logged in; Permission granted; Tag 30 enabled
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0035 – Review Actions Select "Comment" and Attach file

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** Attach file ใช้งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0036 – KYC Management Detail High

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** ใช่งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0037 – Review Actions Select "Approve" and Attach file

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** ใช่งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0038 – KYC Management Detail High

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** ใช่งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0039 – Review Actions Select "Reject" and Attach file

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** ใช่งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0040 – Check Activity Timeline

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** ใช่งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0041 – View Comply Advantage

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** ใช่งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0042 – View AMLO

*   **Function:** KYC Management
    
*   **Status:** Failed
    
*   **Test Results:** ใช่งานไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0043 – Create Custom Limit Tag 29 Success

*   **Function:** Client Management
    
*   **Pre-Conditions:** User is logged in; Permission granted; Tag 29 enabled
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Click Create
        
    *   Select Tag 29
        
    *   Enter valid limit value
        
    *   Click Save
        
*   **Test Data:** Tag = 29Valid limit value
    
*   **Expected Result:** Custom Limit with Tag 29 is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0044 – Create Custom Limit Tag 30 Success

*   **Function:** Client Management
    
*   **Pre-Conditions:** User is logged in; Permission granted; Tag 30 enabled
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Click Create
        
    *   Select Tag 30
        
    *   Enter valid limit value
        
    *   Click Save
        
*   **Test Data:** Tag = 30Valid limit value
    
*   **Expected Result:** Custom Limit with Tag 30 is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0045 – Edit Custom Limits

*   **Function:** Client Management
    
*   **Pre-Conditions:** User is logged in; Custom limit exists
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Select an existing custom limit
        
    *   Click Edit
        
    *   Update limit value
        
    *   Click Save
        
*   **Test Data:** Existing Custom Limit
    
*   **Expected Result:** Custom Limit is updated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0046 – Delete Custom Limit

*   **Function:** Client Management
    
*   **Pre-Conditions:** User is logged in; Custom limit exists
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Select an existing custom limit
        
    *   Click Delete
        
    *   Confirm deletion
        
*   **Test Data:** Existing Custom Limit
    
*   **Expected Result:** Custom Limit is deleted successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0047 – Activate Success

*   **Function:** Client Management
    
*   **Pre-Conditions:** User is logged in; Custom limit is Inactive
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Select an inactive custom limit
        
    *   Click Activate
        
    *   Confirm action
        
*   **Test Data:** Existing inactive custom limit
    
*   **Expected Result:** Custom Limit status is changed to Active
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0048 – Deactivate Success

*   **Function:** Client Management
    
*   **Pre-Conditions:** User is logged in; Custom limit is Active
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Select an active custom limit
        
    *   Click Deactivate
        
    *   Confirm action
        
*   **Test Data:** Existing active custom limit
    
*   **Expected Result:** Custom Limit status is changed to Inactive
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0049 – Create Partner Success

*   **Function:** Partner
    
*   **Pre-Conditions:** User is logged in; Permission granted; Partner does not exist
    
*   **Test Steps:**
    
    *   Go to Partner Management menu
        
    *   Click Create Partner
        
    *   Enter valid partner details
        
    *   Click Save
        
*   **Test Data:** Valid partner information
    
*   **Expected Result:** Partner is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0050 – Create Partner Patner type "Pre fun" Success

Fee type

*   Flat rate
    
*   %Fee payer
    
*   Partner
    
*   Client
    
*   **Function:** Partner
    
*   **Pre-Conditions:** User is logged in; Permission granted; Pre-fund partner type enabled
    
*   **Test Steps:**
    
    *   Go to Partner Management
        
    *   Click Create Partner
        
    *   Select Partner Type = Pre-fund
        
    *   Select Fee Type
        
    *   Select Fee Payer
        
    *   Click Save
        
*   **Test Data:** Partner Type = Pre-fundFee Type = Flat rate or %Fee Payer = Partner / Client
    
*   **Expected Result:** Pre-fund partner is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0051 – Create Partner Patner type "Credit limit" Success

Fee type

*   Flat rate
    
*   %Fee payer
    
*   Partner
    
*   Client
    
*   **Function:** Partner
    
*   **Pre-Conditions:** User is logged in; Permission granted; Credit limit partner type enabled
    
*   **Test Steps:**
    
    *   Go to Partner Management
        
    *   Click Create Partner
        
    *   Select Partner Type = Credit limit
        
    *   Select Fee Type
        
    *   Select Fee Payer
        
    *   Click Save
        
*   **Test Data:** Partner Type = Credit limitFee Type = Flat rate or %Fee Payer = Partner / Client
    
*   **Expected Result:** Credit limit partner is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0052 – Create custom limit Tag 29 Success

Per

*   Transaction
    
*   Month
    
*   **Function:** Partner >> Clients
    
*   **Pre-Conditions:** User is logged in; Permission granted; Tag 29 enabled
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Click Create
        
    *   Select Tag = 29
        
    *   Select Per = Transaction
        
    *   Enter limit value
        
    *   Click Save
        
*   **Test Data:** Partner Type = Credit limitFee Type = Flat rate or %Fee Payer = Partner / Client
    
*   **Expected Result:** Custom limit Tag 29 (Per Transaction) is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0053 – Create custom limit Tag 30 Success

Per

*   Transaction
    
*   Month
    
*   **Function:** Partner >> Clients
    
*   **Pre-Conditions:** User is logged in; Permission granted; Tag 30 enabled
    
*   **Test Steps:**
    
    *   Per = Transaction
        
    *   Valid limit value
        
    *   Go to Custom Limit menu
        
    *   Click Create
        
    *   Select Tag = 30
        
    *   Select Per = Transaction
        
    *   Enter limit value
        
    *   Click Save
        
*   **Test Data:** Tag = 29Per = TransactionValid limit value
    
*   **Expected Result:** Custom limit Tag 30 (Per Transaction) is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0054 – Edit Create custom limit

*   **Function:** Partner >> Clients
    
*   **Pre-Conditions:** User is logged in; Custom limit exists
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Select an existing custom limit
        
    *   Click Edit
        
    *   Update limit details
        
    *   Click Save
        
*   **Test Data:** Existing custom limit
    
*   **Expected Result:** Custom limit is updated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0055 – Delete Create custom limit

*   **Function:** Partner >> Clients
    
*   **Pre-Conditions:** User is logged in; Custom limit exists
    
*   **Test Steps:**
    
    *   Go to Custom Limit menu
        
    *   Select an existing custom limit
        
    *   Click Delete
        
    *   Confirm deletion
        
*   **Test Data:** Existing custom limit
    
*   **Expected Result:** Custom limit is deleted successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0056 – "Top up Partner Wallet" Success

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Partner wallet exists
    
*   **Test Steps:**
    
    *   Go to Partner Wallet menu
        
    *   Select a partner wallet
        
    *   Click Top-up
        
    *   Enter valid amount
        
    *   Confirm top-up
        
*   **Test Data:** Existing partner walletValid top-up amount (> 0)
    
*   **Expected Result:** Partner wallet balance is updated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0057 – Top-up = 0

*   **Pre-Conditions:** User is logged in; Partner wallet exists
    
*   **Test Steps:**
    
    *   Go to Partner Wallet menu
        
    *   Select a partner wallet
        
    *   Click Top-up
        
    *   Enter amount = 0
        
    *   Submit
        
*   **Test Data:** Existing partner walletTop-up amount = 0
    
*   **Expected Result:** The system does not allow top-up and displays validation message
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0058 – Create Global Fee Success

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Permission granted
    
*   **Test Steps:**
    
    *   Select menu Global Fee
        
    *   click Create global fee button
        
    *   input Data
        
    *   click Save button
        
*   **Test Data:** Flat Rate = 5Percentage = 5%Active date = 24 dec
    
*   **Expected Result:** The system allows creating a global fee successfully.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0059 – Edit Global Fee

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Global fee exists
    
*   **Test Steps:**
    
    *   Select menu Global Fee
        
    *   click Edit button
        
    *   input Data
        
    *   click Save button
        
*   **Test Data:** Flat Rate = 2Percentage = 2%Active date = 24 dec
    
*   **Expected Result:** The system allows editing successfully.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0060 – Delete Global Fee

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Global fee exists
    
*   **Test Steps:**
    
    *   Select menu Global Fee
        
    *   click Delete button
        
*   **Test Data:** Flat Rate = 5Percentage = 5%Active date = 24 dec
    
*   **Expected Result:** The system allows deleting successfully.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0061 – Create Custom fee "Flat Rate" Success

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Permission granted
    
*   **Test Steps:**
    
    *   Select menu partner
        
    *   Select tab wallet & Fee
        
    *   click Create custom fee
        
    *   Seleck Flat Rate
        
    *   input data Create custom fee
        
    *   click confirm buuton
        
*   **Test Data:** - Flat Rate-Enter amount = 5 THB
    
*   Start date = 24 dec
    
*   End date = 31 dec
    
*   **Expected Result:** The system allows creating a custom fee successfully.
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0062 – Create Custom fee "Percentage" Success

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Permission granted
    
*   **Test Steps:**
    
    *   Go to Fee Management menu
        
    *   Click Create Custom Fee
        
    *   Select Fee Type = Percentage
        
    *   Enter valid percentage value
        
    *   Click Save
        
*   **Test Data:** Fee Type = PercentageValid percentage value (e.g. 2.5%)Status = Active
    
*   **Expected Result:** Custom fee (Percentage) is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0063 – Edit View custom fee history

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Custom fee exists
    
*   **Test Steps:**
    
    *   Go to Fee Management
        
    *   Select an existing custom fee
        
    *   Click Edit
        
    *   Update fee value
        
    *   Click Save
        
    *   Open Fee History
        
*   **Test Data:** Existing custom fee
    
*   **Expected Result:** Custom fee is updated successfully and history is displayed correctly
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0064 – Delete View custom fee history

*   **Function:** Partner >> Wallet & Fee
    
*   **Pre-Conditions:** User is logged in; Custom fee exists
    
*   **Test Steps:**
    
    *   Go to Fee Management
        
    *   Select an existing custom fee
        
    *   Click Delete
        
    *   Confirm deletion
        
    *   Open Fee History
        
*   **Test Data:** Existing custom fee
    
*   **Expected Result:** Custom fee is deleted successfully and deletion record appears in history
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0065 – Edit partner user

*   **Function:** Partner > Partner User
    
*   **Pre-Conditions:** User is logged in; Partner user exists
    
*   **Test Steps:**
    
    *   Go to Partner Management
        
    *   Select a partner
        
    *   Open User List
        
    *   Select a user
        
    *   Click Edit
        
    *   Update user information
        
    *   Click Save
        
*   **Test Data:** Existing partner user
    
*   **Expected Result:** Partner user information is updated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0066 – Create user Success

*   **Function:** Partner >> Partner Users
    
*   **Pre-Conditions:** User is logged in; Permission granted
    
*   **Test Steps:**
    
    *   Go to User Management menu
        
    *   Click Create User
        
    *   Enter valid user information
        
    *   Assign role
        
    *   Click Save
        
*   **Test Data:** Unique emailValid roleValid user details
    
*   **Expected Result:** User is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0067 – Create user Duplicate

*   **Function:** Partner >> Partner Users
    
*   **Pre-Conditions:** User is logged in; User already exists
    
*   **Test Steps:**
    
    *   Go to User Management
        
    *   Click Create User
        
    *   Enter an email that already exists
        
    *   Click Save
        
*   **Test Data:** Existing email address
    
*   **Expected Result:** The system does not allow creation and displays duplicate user error
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0068 – Edit Create user

*   **Function:** Partner >> Partner Users
    
*   **Pre-Conditions:** User is logged in; User exists
    
*   **Test Steps:**
    
    *   Go to User Management
        
    *   Select an existing user
        
    *   Click Edit
        
    *   Update user information
        
    *   Click Save
        
*   **Test Data:** Existing user
    
*   **Expected Result:** User information is updated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0069 – Edit General info Success

*   **Function:** Partner >> General info
    
*   **Pre-Conditions:** User is logged in; User exists
    
*   **Test Steps:**
    
    *   Go to User Management or Partner Management
        
    *   Select an existing record
        
    *   Open General Info section
        
    *   Update information
        
    *   Click Save
        
*   **Test Data:** Existing user / partner
    
*   **Expected Result:** General information is updated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0070 – Check Global Limit Purchase Detail

*   **Function:** Global Limit Purchase
    
*   **Pre-Conditions:** User is logged in; Global limit exists
    
*   **Test Steps:**
    
    *   Go to Global Limit menu
        
    *   Select an existing global limit record
        
    *   Click View Detail
        
*   **Test Data:** Existing global limitExisting purchase transaction
    
*   **Expected Result:** The system displays global limit purchase details correctly
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0071 – Create Internal user Success

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; Permission granted
    
*   **Test Steps:**
    
    *   Go to User Management menu
        
    *   Click Create Internal User
        
    *   Enter valid user information
        
    *   Assign role
        
    *   Set status = Active
        
    *   Click Save
        
*   **Test Data:** Unique emailValid roleStatus = Active
    
*   **Expected Result:** Internal user is created successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0072 – Check Create Status Active

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; User is created
    
*   **Test Steps:**
    
    *   Go to User Management
        
    *   Search for the created internal user
        
    *   Check user status
        
*   **Test Data:** Newly created internal user
    
*   **Expected Result:** User status is displayed as Active
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0073 – Change password Success

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in
    
*   **Test Steps:**
    
    *   Log in as the internal user
        
    *   Go to Change Password
        
    *   Enter old password
        
    *   Enter new password
        
    *   Confirm new password
        
    *   Click Save
        
*   **Test Data:** Valid old passwordValid new password
    
*   **Expected Result:** Password is changed successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0074 – Login Success

*   **Function:** Internal User
    
*   **Pre-Conditions:** User exists and is Active
    
*   **Test Steps:**
    
    *   Open login page
        
    *   Enter valid email and password
        
    *   Click Login
        
*   **Test Data:** Valid email and password
    
*   **Expected Result:** User logs in successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0075 – Forgot Password success

*   **Function:** Internal User
    
*   **Pre-Conditions:** Active user exists; Email service available
    
*   **Test Steps:**
    
    *   Open login page
        
    *   Click Forgot Password
        
    *   Enter registered email
        
    *   Submit request
        
*   **Test Data:** Existing user email
    
*   **Expected Result:** Password reset process is initiated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0076 – Create Internal user duplicate

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; User already exists
    
*   **Test Steps:**
    
    *   Go to User Management
        
    *   Click Create Internal User
        
    *   Enter an email that already exists
        
    *   Click Save
        
*   **Test Data:** Existing email address
    
*   **Expected Result:** The system does not allow creation and displays duplicate user error
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0077 – Edit success

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; Record exists
    
*   **Test Steps:**
    
    *   Go to User Management
        
    *   Select an existing internal user
        
    *   Click Edit
        
    *   Update user information
        
    *   Click Save
        
*   **Test Data:** Existing internal user
    
*   **Expected Result:** Internal user information is updated successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0079 – Role Matrix check "Operation"

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; Operation role assigned
    
*   **Test Data:** Role = Operation
    
*   **Expected Result:** Operation role can access permitted menus and restricted actions are blocked
    
*   **Test Results:** In progress
    

### TC\_Tourist\_E-Wallet\_BO\_0080 – Role Matrix check "Accounting"

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; Accounting role assigned
    
*   **Test Data:** Role = Accounting
    
*   **Expected Result:** Accounting role access is limited to permitted menus
    
*   **Test Results:** In progress
    

### TC\_Tourist\_E-Wallet\_BO\_0081 – Role Matrix check Customer service

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; Customer Service role assigned
    
*   **Test Data:** Role = Customer Service
    
*   **Expected Result:** Customer Service role permissions work as defined
    
*   **Test Results:** In progress
    

### TC\_Tourist\_E-Wallet\_BO\_0082 – Role Matrix check Risk Operation

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; Risk Operation role assigned
    
*   **Test Data:** Role = Risk Operation
    
*   **Expected Result:** Risk Operation role permissions work as defined
    
*   **Test Results:** In progress
    

### TC\_Tourist\_E-Wallet\_BO\_0083 – Delete Success

*   **Function:** Internal User
    
*   **Pre-Conditions:** User is logged in; Record exists
    
*   **Test Steps:**
    
    *   Go to User Internal User
        
    *   Select an existing internal user
        
    *   Click Delete
        
    *   Confirm deletion
        
*   **Test Data:** Existing internal user
    
*   **Expected Result:** Internal user is deleted successfully
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0084 – Check Bot report List page

*   **Function:** Report >> Bot report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Bot report
        
*   **Status:** Failed
    
*   **Test Results:** ยังไม่แสดง
    

### TC\_Tourist\_E-Wallet\_BO\_0085 – Dowlond Bot report Success

*   **Function:** Report >> Bot report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Bot report
        
    *   click dowlond
        
*   **Status:** Failed
    
*   **Test Results:** Dowlond ไม่ได้
    

### TC\_Tourist\_E-Wallet\_BO\_0086 – Dowlond Payment Accounting Report Success

*   **Function:** Report >> Payment Accounting Report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Payment Accounting Report
        
    *   click dowlond
        
*   **Status:** Failed
    
*   **Test Results:** ไม่เจอ funtion นี้
    

### TC\_Tourist\_E-Wallet\_BO\_0087 – Check Payment Accounting Report List page

*   **Function:** Report >> Payment Accounting Report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Payment Accounting Report
        
*   **Status:** Failed
    
*   **Test Results:** ยังไม่แสดง
    

### TC\_Tourist\_E-Wallet\_BO\_0088 – Generate report Payment Accounting Report Success

*   **Function:** Report >> Payment Accounting Report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Payment Accounting Report
        
    *   click Generate report
        
    *   Select date
        
*   **Test Data:** select date
    
*   **Expected Result:** The system can Generate report Payment Accounting Report Success
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0089 – Settlement Report check list page

*   **Function:** Report >> Settlement Report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Settlement Report
        
*   **Test Data:** select date
    
*   **Expected Result:** The system displays all required data Settlement Report
    
*   **Status:** Passed
    

### TC\_Tourist\_E-Wallet\_BO\_0090 – Generate report Settlement Report Success

*   **Function:** Report >> Settlement Report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Settlement Report
        
    *   click Generate report
        
    *   Select date
        
*   **Test Data:** select date
    
*   **Status:** Failed
    

### nan – Dowlond Settlement Report Success

*   **Function:** Report >> Settlement Report
    
*   **Pre-Conditions:** Transaction data already exists.
    
*   **Test Steps:**
    
    *   login success
        
    *   select menu Report >> Settlement Report
        
    *   click dowlond
        
*   **Expected Result:** The System can Dowlond Settlement Report
    
*   **Status:** Passed