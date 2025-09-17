import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

function PrivacyTabs() {
  return (
    <TabsContent value="Privacy-Policy">
      <Card className="shadow-lg max-w-4xl mx-auto bg-transparent border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            Privacy Policy
          </CardTitle>
          <p className="text-sm ">
            Last Updated: 08.08.2025
          </p>
        </CardHeader>
        <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold">Our Company</h2>
            <Separator className="my-2" />
            <p>
              Registered office address:
              <br />
              <strong>Amaanah</strong>
              <br />
              48 - 50 St Augustine’s St,
              <br />
              Norwich, NR3 3AD
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Introduction</h2>
            <Separator className="my-2" />
            <p>
              In this Privacy Policy, Amaanah acts as a data controller. This
              document details how Amaanah and any other company owned by
              Amaanah will ensure the privacy and security of your Personal
              Data. Any reference to “personal data” implies information which
              could directly identify you (e.g. your name or national insurance
              number) and information which could indirectly identify you when
              combined with other information we possess (e.g. gender or date of
              birth). “Process” or “processing” refers to any possible use of
              personal data, including but not limited to recording, storing,
              viewing or disclosing personal data. Amaanah is liable to
              processing your Data in accordance with the General Data
              Protection Regulation (GDPR) and other applicable legislation in
              the European Economic Area. Rest assured that under no
              circumstances will we sell or rent your Data to any third parties
              nor for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Parties Applicable</h2>
            <Separator className="my-2" />
            <p>
              This Privacy Policy applies to both individuals and companies who
              are customers of Amaanah and any other individual or company
              affiliated with Amaanah.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>The Merchant</li>
              <li>The Merchant’s Customer</li>
              <li>Vendors</li>
              <li>Partner</li>
              <li>Visitor</li>
              <li>Representative</li>
            </ul>
            <p className="mt-2">
              This policy only concerns data processing for which we are the
              data controller. If we process data on behalf of another
              controller, we follow their policies and instructions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">What Data We Collect</h2>
            <Separator className="my-2" />
            <ul className="list-disc list-inside space-y-1">
              <li>Registered email</li>
              <li>Password</li>
              <li>First and last name</li>
              <li>IP address</li>
              <li>Date and time</li>
              <li>Browser and operating system</li>
              <li>URL requested</li>
              <li>Billing email</li>
              <li>Shipping address</li>
              <li>Card details</li>
            </ul>
            <p className="mt-2">
              This also includes data regarding the Merchant’s Customer who uses
              these services to order, reserve, purchase, receive deliveries and
              more, and the Merchant’s staff whose details are uploaded to the
              dashboard for management purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Legal Basis for Processing
            </h2>
            <Separator className="my-2" />
            <p>
              Amaanah processes Personal Data as part of its legitimate business
              interests both as an Electronic Point of Sales Software and
              Hardware Provider and the Host of our website. We acquire your
              consent upon your agreeing to our collection of your Data, whether
              by using our services or by clicking consent options.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                Deliver, bill and confirm your purchase whilst preventing fraud
              </li>
              <li>Provide customer service</li>
              <li>Notify you of relevant discounts and preferred products</li>
              <li>Provide an online account and membership for our services</li>
              <li>Run features on our software</li>
              <li>Recover outstanding payments or debts owed to us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Cookies</h2>
            <Separator className="my-2" />
            <p>
              Cookies are data that a site or service provider transfers from
              your browser to your computer. Essential cookies are required for
              site functionality, but you may withdraw consent for non-essential
              cookies.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>First Party Cookies</li>
              <li>Third-Party Cookies</li>
              <li>Website Management Cookies</li>
              <li>Personalisation Individualisation Cookies</li>
              <li>Analytics Data Cookies</li>
              <li>Security Cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Data Storage & Sharing</h2>
            <Separator className="my-2" />
            <p>
              Your data may be stored or processed outside the EEA under
              GDPR-compliant safeguards. We may share your data with:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Vendors and Partners</li>
              <li>Independent data controllers</li>
              <li>Data processors under our instructions</li>
              <li>Our affiliates when necessary</li>
              <li>Authorities when legally required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Security Protocol</h2>
            <Separator className="my-2" />
            <p>
              We continually evaluate our Privacy Policy, restrict access to
              your personal data to those who need it, and train our employees
              to uphold the privacy and security of your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Data Retention</h2>
            <Separator className="my-2" />
            <p>
              Your data is stored only for the duration necessary to fulfil
              legitimate purposes or legal obligations. Retention periods comply
              with laws including the Companies Act, HMRC requirements, and TRAS
              Fraud Prevention Agency guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Your Rights</h2>
            <Separator className="my-2" />
            <ul className="list-disc list-inside space-y-1">
              <li>Unsubscribe from marketing information</li>
              <li>Withdraw consent for future processing</li>
              <li>Gain access to your data in a machine-readable format</li>
              <li>Request corrections to inaccurate data</li>
              <li>Request erasure or restriction of processing</li>
              <li>
                Submit complaints to the Information Commissioner’s Office
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Processing of Minors’ Data
            </h2>
            <Separator className="my-2" />
            <p>
              Our services are not open to minors under the age of 16. If you
              suspect that a child under 16 has provided data, please notify us
              so we may delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Changes to This Policy</h2>
            <Separator className="my-2" />
            <p>
              This Privacy Policy may be revised occasionally. All updates will
              be posted here and emailed to you when necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <Separator className="my-2" />
            <p>
              Please contact us if you have any questions regarding the
              processing of your data:
              <br />
              <strong>Amaanah</strong>
              <br />
              48 - 50 St Augustine’s St,
              <br />
              Norwich NR3 3AD
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:amaanahsoft@gmail.com"
                className="text-primary underline"
              >
                amaanahsoft@gmail.com
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default PrivacyTabs;
