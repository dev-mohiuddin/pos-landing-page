import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

function LicenseTerms() {
  return (
    <TabsContent value="license-terms">
      <Card className="shadow-lg max-w-4xl mx-auto bg-transparent border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold ">
            Amaanah Software License Terms of Use
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-muted-foreground text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-2">Definitions</h2>
            <p>
              The Terms: This agreement. The Merchant: You, the merchant client
              of Amaanah services. We, Us, Our: Refers to Amaanah. Subscribers:
              The Merchant and their staff members. Customers: The customers of
              the Merchant. Users: Anyone who encounters the Services. The
              License Contract: The ordering document between Amaanah and the
              Merchant. The Agreements: Collectively refers to all related
              agreements. The Sites: Any Amaanah web pages. The Services:
              Amaanah software, hardware, services, add-ons, and integrations.
              The Content: All information, designs, data, and media provided by
              Amaanah. Merchant Content: Information provided by the Merchant.
              User Content: Customer information submitted through Amaanah.
              Effective Date: The earlier of the Go-Live Date or First Payment
              Date. Agreement Created Date: Date specified in the Merchant’s
              License Contract. Confidential Information: Proprietary or
              sensitive information not generally known.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">Nature of the Terms</h2>
            <p>
              Amaanah provides the Amaanah point of sales software, hardware,
              and related services subject to these terms. By using the
              Services, Merchants agree to be legally bound.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mt-4">Modification</h3>
            <p>
              Amaanah may modify these terms with 30 days’ notice. Merchants not
              in agreement may cancel their subscription at the end of the
              current term.
            </p>

            <h3 className="text-lg font-semibold mt-4">
              Merchant’s Registration Details
            </h3>
            <p>
              Merchants must provide accurate registration data and protect
              account credentials.
            </p>

            <h3 className="text-lg font-semibold mt-4">
              Disputes and Jurisdiction
            </h3>
            <p>
              Disputes are governed by the laws of England and Wales and
              resolved through arbitration.
            </p>

            <h3 className="text-lg font-semibold mt-4">
              Unenforceable Provisions
            </h3>
            <p>
              If any term is unenforceable, the remainder still applies. Rights
              cannot be assigned by the Merchant without consent.
            </p>

            <h3 className="text-lg font-semibold mt-4">Binding Term</h3>
            <p>
              The agreement renews automatically unless cancelled with 12
              months’ notice.
            </p>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">Fees and Payments</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Fees are charged as per the License Contract.</li>
              <li>Late payments may lead to suspension of Services.</li>
              <li>Merchants are responsible for all applicable taxes.</li>
            </ul>
          </section>

          <Separator />

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Licensing, Intellectual Property, and Data Access
            </h2>
            <p>
              Amaanah retains intellectual property rights over the software and
              Content. Merchants receive a limited, revocable license to use the
              Services. Merchant content is licensed to Amaanah for service
              delivery purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Usage Restrictions</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>No illegal, harmful, or unauthorised use of the Services.</li>
              <li>No misrepresentation of identity.</li>
              <li>No unauthorised data access or modification.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Installation and Hardware Performance
            </h2>
            <p>
              Professional installation and other services are chargeable.
              Amaanah is not liable for compatibility issues with third-party
              hardware unless purchased through Amaanah.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Maintenance and Updates
            </h2>
            <p>
              Amaanah may release updates or patches, and Merchants must apply
              them to continue using the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Communications</h2>
            <p>
              Amaanah may communicate via email, phone, or dashboard
              notifications. Merchants must keep contact information updated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Social Media Areas</h2>
            <p>
              Merchants using public discussion areas do so at their own risk.
              Amaanah may moderate content that violates policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Gift Card Services</h2>
            <p>
              Merchants are solely responsible for managing gift card programs
              and compliance with regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Payment Processing</h2>
            <p>
              Payments are processed via third-party providers. Amaanah is not
              liable for issues related to such transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Privacy and Security</h2>
            <p>
              Merchants must comply with GDPR and data privacy regulations.
              Confidential information must be protected and disclosed only when
              legally required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Software Warranty Disclaimer
            </h2>
            <p>
              Software is provided without warranty. Merchants must maintain
              backups to ensure business continuity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Liability and Indemnity
            </h2>
            <p>
              Amaanah is not liable for indirect or consequential damages. Total
              liability is limited to the amount paid in the three months prior
              to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              Default and Termination
            </h2>
            <p>
              In case of default, Amaanah may terminate the agreement and
              recover outstanding dues. Early termination may incur additional
              fees.
            </p>
          </section>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default LicenseTerms;
