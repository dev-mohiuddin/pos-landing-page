import React from "react";
import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

function PrivacyTabs() {
  return (
    <TabsContent value="Privacy-Policy">
      <Card className="shadow-lg max-w-4xl mx-auto bg-transparent border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          <p className="text-sm ">Last Updated: 08.08.2025</p>
        </CardHeader>
        <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold">Our Company</h2>
            <Separator className="my-2" />
            <p>
              Registered office address:
              <br />
              Amaanah
              <br />
              48 -50 St Augustine’s St,
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
              Data. In this Privacy Policy, any reference to “personal data”
              implies information which could directly identify you (e.g. your
              name or national insurance number) and information which could
              indirectly identify you i.e. when combined with other information
              we possess (e.g. gender or date of birth). “Process” or
              “processing” refers to any possible use of personal data,
              including and not limited to recording, storing, viewing or
              disclosing personal data. Amaanah is liable to processing your
              Data in accordance with the General Data Protection Regulation
              (GDPR) and other applicable legislation in the European Economic
              Area. Rest assured that under no circumstances will we sell or
              rent your Data to any third parties nor for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Parties applicable in this Privacy Policy
            </h2>
            <Separator className="my-2" />
            <p>
              This Privacy Policy applies to both individuals and companies who
              are customers of Amaanah and any other individual or company that
              is affiliated with Amaanah.
            </p>
            <p className="mt-2">This entails the following:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>The Merchant</li>
              <li>
                The Merchant’s Customer – whose Data the Merchant may have
                access to
              </li>
              <li>
                Vendors – individuals and companies in a contractual
                relationship with Amaanah to provide a component of our services
              </li>
              <li>
                Partner – individuals and companies who refer merchants and
                promote our services
              </li>
              <li>
                Visitor – visitors to the webpage who do not have an account
                with us
              </li>
              <li>
                Representative – any individual who acts on behalf of the
                Merchant whose Data is being shared
              </li>
            </ul>
            <p className="mt-2">
              As such, this policy only concerns data processing for which we
              are the data controller; the authority and liable party over the
              data. If we process data on behalf of another data controller, we
              collect, use, disclose and retain certain personal information
              only under the controller’s instruction, and therefore our
              processing of your personal information is according to the
              controller’s policies. This also applies to third-party links
              unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              What kinds of Data can be collected?
            </h2>
            <Separator className="my-2" />
            <ul className="list-disc list-inside space-y-1 ml-4">
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
              This includes Data regarding the Merchant’s Customer who uses
              these services to order, reserve, purchase, receive deliveries and
              more, and the Merchant’s staff whose details are uploaded to the
              dashboard for staff management purposes. We retain this Data only
              as per your discretion when you choose to upload this information;
              the Merchant also has the responsibility to follow security
              protocol when handling transactions from their customers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Legal basis for processing your Personal Data
            </h2>
            <Separator className="my-2" />
            <p>
              Amaanah processes Personal Data as part of its legitimate business
              interests both as an Electronic Point of Sales Software and
              Hardware Provider and the Host of our website. We acquire your
              consent upon your agreeing to our collection of your Data, whether
              by using our services or upon clicking the option that states that
              you permit Amaanah to use your personal data for a legitimate
              purpose.
            </p>
            <p className="mt-2">We may use your Data to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                Deliver, bill and confirm your purchase whilst preventing fraud
              </li>
              <li>Provide customer service</li>
              <li>Notify you of relevant discounts and preferred products</li>
              <li>Provide an online account and membership for our services</li>
              <li>Run features on our software</li>
              <li>
                Recover outstanding payments or debts owed to us, including
                sharing with debt recovery agencies where necessary
              </li>
            </ul>
            <p className="mt-2">
              We will not sell your data, use it for unrelated purposes, or
              share it without your consent unless legally required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Methods in which we collect your Personal Data
            </h2>
            <Separator className="my-2" />
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Through information provided by you once you;
                <ol className="list-lower-roman list-inside ml-6">
                  <li>Open an account;</li>
                  <li>Contact us;</li>
                  <li>Make a purchase;</li>
                  <li>Answer surveys.</li>
                </ol>
              </li>
              <li>
                When you visit our website (see section titled “Cookies”);
              </li>
              <li>
                When you call our customer services (may be recorded for
                training, quality assurance, and dispute resolution purposes)
              </li>
            </ul>
            <p className="mt-2">
              All Data we collect is for the purpose of improving your user and
              customer experience. Any Data acquired regarding an employee,
              customer, supplier or affiliates has a legitimate reason for its
              use and is obtained to fulfil legitimate purposes and/or legal
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Cookies</h2>
            <Separator className="my-2" />
            <p>
              Cookies are data that a site or service provider transfers from
              your internet browser to your computer’s hard drive. These allow
              the site’s or service provider’s systems to recognise your browser
              to record and recall your Data. Essential cookies are needed for
              site functionality, but you have the right to withdraw consent for
              non-essential cookies via the website pop-up or to turn them off
              according to your preferences on your browser.
            </p>
            <p className="mt-2">Here are some of the cookies we may use:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                First Party Cookies – these are cookies required for the
                functions of the web pages, some of which may only affect a
                single feature, and others which may disrupt the entire site in
                its absence and cannot be turned off; these cookies can be
                either temporary or permanent
              </li>
              <li>
                Third-Party Cookies – these cookies are used by third-parties
                who run certain services or features of the website on our
                behalf to gather information on you, but it can be easily
                disabled
              </li>
              <li>
                Website Management Cookies – these are used to retain your
                session and filled-in information for your convenience when you
                leave and return e.g. to your basket
              </li>
              <li>
                Personalisation Individualisation Cookies – these are used to
                recognise returning visitors and their browsing history among
                other information to make your site experience smoother
              </li>
              <li>
                Analytics Data Cookies - these are used to monitor user
                interactions with the site so we can become aware of which
                features are successful or need more work; analytics service
                providers are not permitted to use the information they collect
                for us, other than to help us better our services upon our
                request.
              </li>
              <li>
                Security Cookies - these protect both the user and the platform
                from unfriendly visitors
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Where is your Personal Data stored?
            </h2>
            <Separator className="my-2" />
            <p>
              Our base is in the European Economic Area. However, we may have to
              share your data with third-parties, or process your data
              ourselves, outside of this territory. Your Personal Data may be
              processed by employees working for us outside the EEA or
              third-party data processors for the purposes set out in this
              Privacy Policy. When this occurs outside the EEA, the necessary
              safeguards will still be in accordance with European data
              protection legislation, such as the General Data Protection
              Regulation (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Who can your Data be shared with?
            </h2>
            <Separator className="my-2" />
            <p>
              To provide our services, we may have to share your Data with
              third-party providers of components of our services and these may
              be either:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>Vendors and Partners</li>
              <li>
                Independent data controllers such as authorities, acquirers and
                other financial institutions who process your Data according to
                their policies and personal data processing principles; we only
                share your Data to receive the essential services they provide
                and we have no control over this data
              </li>
              <li>
                Data processors who process Data on our behalf for our
                legitimate interests
              </li>
              <li>Upon your request</li>
            </ul>
            <p className="mt-2">
              We may also share your information with our affiliates for the
              legitimate reasons established; to facilitate a full service to
              you in which our affiliates perform components of the full-service
              offering, such as customer service and payment processing.
              Furthermore, in the event of a merger, acquisition, or sale of
              assets, your personal data may be transferred to the new entity as
              part of the business continuity process.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Security Protocol</h2>
            <Separator className="my-2" />
            <p>
              Amaanah has established the necessary precautions and preparations
              within our institution to protect the confidentiality of the
              personal data that you entrust us with. We continually evaluate
              the observance of our Privacy Policy in order to restrict access
              to your personal data to those who need it and training our
              employees in upholding the privacy and security of your personal
              data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              How long do we keep this information?
            </h2>
            <Separator className="my-2" />
            <p>
              We store your information only for the appropriate duration to
              fulfil the legitimate purposes aforementioned or for as long as we
              reasonably require it to uphold our legal rights. Your Data will
              be retained in line with the GDPR and other applicable legislation
              in the EEA.
            </p>
            <p className="mt-2">
              Such retention periods are liable to certain criteria including:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                Compliance with the duration for accounting records, as set by
                the Companies Act and HM Revenue & Customs (HMRC).
              </li>
              <li>
                Compliance with the retention periods set by the TRAS Fraud
                Prevention Agency.
              </li>
            </ul>
            <p className="mt-2">
              In cases where this is not required by legislation, such retention
              periods are supported by commercial justifications. This will be
              carried out for no longer than what is required to fulfil the
              purposes for which it is processed. Such a justification may be:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>Out of obligation to our customer, supplier or partner;</li>
              <li>To enable us to provide you with appropriate services;</li>
              <li>To allow us to provide solutions to complaints;</li>
              <li>
                To uphold security via the detection and prevention of fraud.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Your rights in accordance with the GDPR
            </h2>
            <Separator className="my-2" />
            <p>You have the right to the following:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 ml-4">
              <li>
                Unsubscribe from any marketing information on the behalf of
                Amaanah.
              </li>
              <li>
                Withdraw your consent, if initially provided, for future
                processing. Please note that we may still be entitled to process
                your Personal Data if we have another legitimate reason besides
                consent.
              </li>
              <li>
                Gain access to your Personal Data which we possess; you hold the
                right to receive some Personal Data in a comprehensible and
                machine-readable format wherever this is a reasonable request.
              </li>
              <li>
                Request in writing that we correct your Personal Data if
                inaccurate or incomplete by clarifying what Personal Data you
                would like to correct. In your interests, we may only implement
                requests with respect to the Personal Data associated with the
                specific email address that you use to send us your request; we
                may need to verify your identity before implementing your
                request.
              </li>
              <li>
                Appeal for the erasure of your Personal Data in certain
                circumstances. Please note that there may be circumstances where
                we are legally entitled to retain it.
              </li>
              <li>
                Appeal for the restriction of our processing of your Personal
                Data in certain circumstances. Please note that there may be
                circumstances where we are legally entitled to retain it.
              </li>
              <li>
                Evaluate the Data we process on your behalf - access will be
                provided in line with legal obligations. Your request will
                require processing and your specific concerns should be
                submitted to amaanahsoft@gmail.com
              </li>
            </ul>
            <p className="mt-2">
              Furthermore, you are legally entitled to appeal your dispute with
              the Information Commissioner’s Office.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Processing the Personal Data of Minors
            </h2>
            <Separator className="my-2" />
            <p>
              Our Services are not open to minors under the age of 16. In the
              case that you are aware of or reasonably suspect that a child
              under the age of 16 has provided their Data, please notify us so
              that we may delete that information from our databases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              Changes to the Privacy Policy
            </h2>
            <Separator className="my-2" />
            <p>
              This Privacy Policy does not affect any other contract with us and
              is open to occasional revision. All revisions we make to our
              Privacy Policy will be posted on this website and emailed to you
              when necessary.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How to contact us</h2>
            <Separator className="my-2" />
            <p>
              Please contact our office if you have any further enquiries
              regarding the processing of your Data at the address below:
              <br />
              Amaanah
              <br />
              48 -50 St Augustine’s St,
              <br />
              Norwich NR3 3AD
            </p>
            <p className="mt-2">
              Amaanah will investigate and attempt to resolve any doubts and
              grievances regarding the use of personal data by referencing the
              privacy policies stated in this policy
            </p>
          </section>
        </CardContent>
      </Card>
    </TabsContent>
  );
}

export default PrivacyTabs;
