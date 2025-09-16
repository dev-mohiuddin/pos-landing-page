"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { tac } from "@/assets";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <div className="mb-5">
        <Image src={tac} alt="TAC" />
      </div>
      <Tabs defaultValue="Privacy-Policy" className="">
        <TabsList className={`flex items-center gap-3`}>
          <TabsTrigger value="Privacy-Policy">Privacy Policy</TabsTrigger>
          <TabsTrigger value="tac">Terms and Conditions</TabsTrigger>
        </TabsList>
        <TabsContent value="Privacy-Policy">
          <Card className=" bg-transparent border-0 text-muted-foreground">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
              <p className="font-semibold">Last Updated: 08.08.2025</p>

              <p>
                <strong>Our Company Registered office address:</strong>
                <br />
                Amaanah EPOS <br />
                48 -50 St Augustine’s St, Norwich, NR3 3AD
              </p>

              <p>
                We are registered with the Information Commissioner's Office
                (ICO), the data protection regulator in the UK, to use personal
                data and our registration number is …...
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">Introduction</h2>
              <p>
                In this Privacy Policy, Amaanah EPOS acts as a data controller.
                This document details how Amaanah EPOS and any other company
                owned by Amaanah EPOS will ensure the privacy and security of
                your Personal Data.
              </p>
              <p>
                In this Privacy Policy, any reference to “personal data” implies
                information which could directly identify you (e.g. your name or
                national insurance number) and information which could
                indirectly identify you i.e. when combined with other
                information we possess (e.g. gender or date of birth).
              </p>
              <p>
                “Process” or “processing” refers to any possible use of personal
                data, including and not limited to recording, storing, viewing
                or disclosing personal data.
              </p>
              <p>
                Amaanah EPOS is liable to processing your Data in accordance to
                the General Data Protection Regulation (GDPR) and other
                applicable legislation in the European Economic Area.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">
                Parties applicable in this Privacy Policy
              </h2>
              <p>
                This Privacy Policy applies to both individuals and companies
                who are customers of Amaanah EPOS and any other individual or
                company that is affiliated with Amaanah EPOS (including and not
                limited to potential, current and former suppliers, employees
                and customers).
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">
                Legal basis for processing your Personal Data
              </h2>
              <p>
                Amaanah EPOS processes Personal Data as part of its legitimate
                business interests. We acquire your consent upon your agreeing
                to our collection of your Data, whether by using our services or
                upon clicking the option that states that you permit Amaanah
                EPOS to use your personal data for a legitimate purpose.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">
                Methods in which we collect your Personal Data
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Through information provided by you;</li>
                <li>We collect Data once you open up an account;</li>
                <li>
                  When you visit our website (see section titled “Cookies”);
                </li>
                <li>When you contact us</li>
              </ul>
              <p>
                All Data we collect is for the purpose of improving your user
                and customer experience. Any Data acquired regarding an
                employee, customer, supplier or affiliates has a legitimate
                reason for its use and is obtained to fulfil legitimate purposes
                and/or legal requirements.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">Use of cookies</h2>
              <p>
                Cookies are data that a site or service provider transfers from
                your internet browser to your computer’s hard drive upon giving
                your consent. These allow the site’s or service provider’s
                systems to recognise your browser to record and recall your
                Data.
              </p>
              <p>
                They are also used to analyse your preferences based on your
                site activity, which enables us to provide you with improved
                services. We also use cookies to help us compile site
                interaction analytics so that we can offer better site
                experiences and tools in the future.
              </p>
              <p>
                Analytics service providers are not permitted to use the
                information they collect for us, other than to help us better
                our services upon our request.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">
                Where is your Personal Data stored?
              </h2>
              <p>
                Our base is in the European Economic Area. However, we may have
                to share your data with third-parties, or process your data
                ourselves, outside of this territory. Your Personal Data may be
                processed by employees working for us outside the EEA or
                third-party data processors for the purposes set out in this
                Privacy Policy.
              </p>
              <p>
                When this occurs outside the EEA, the necessary safeguards will
                still be in accordance with European data protection
                legislation, such as the General Data Protection Regulation
                (GDPR).
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">Security Protocol</h2>
              <p>
                Amaanah EPOS has established the necessary precautions and
                preparations within our institution to protect the
                confidentiality of the personal data that you entrust us with.
                We continually evaluate the observance of our Privacy Policy in
                order to restrict access to your personal data to those who need
                it and training our employees in upholding the privacy and
                security of your personal data.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">
                How long do we keep this information?
              </h2>
              <p>
                We store your information only for the appropriate duration to
                fulfil the legitimate purposes aforementioned or for as long as
                we reasonably require it to uphold our legal rights. Your Data
                will be retained in line with the GDPR and other applicable
                legislation in the EEA. Such retention periods are liable to
                certain criteria including:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Compliance with the duration for accounting records, as set by
                  the Companies Act and HM Revenue & Customs (HMRC).
                </li>
                <li>
                  Compliance with the retention periods set by the TRAS Fraud
                  Prevention Agency.
                </li>
              </ul>
              <p>
                In cases where this is not required by legislation, such
                retention periods are supported by commercial justifications.
                This will be carried out for no longer than what is required to
                fulfil the purposes for which it is processed. Such a
                justification may be:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Out of obligation to our customer, supplier or partner;</li>
                <li>To enable us to provide you with appropriate services;</li>
                <li>To allow us to provide solutions to complaints;</li>
                <li>
                  To uphold security via the detection and prevention of fraud.
                </li>
              </ul>

              <Separator />

              <h2 className="text-xl font-semibold">
                Your rights in accordance with the GDPR
              </h2>
              <p>You have the right to the following:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Unsubscribe from any marketing information on the behalf of
                  Amaanah EPOS.
                </li>
                <li>
                  Withdraw your consent, if initially provided, for future
                  processing. Please note that we may still be entitled to
                  process your Personal Data if we have another legitimate
                  reason besides consent.
                </li>
                <li>
                  Gain access to your Personal Data which we possess; you hold
                  the right to receive some Personal Data in a comprehensible
                  and machine-readable format wherever this is a reasonable
                  request.
                </li>
                <li>
                  Request that we correct your Personal Data if inaccurate or
                  incomplete by submitting a Data Subject Access Request form
                  and clarifying what Personal Data you would like to correct.
                  In your interests, we may only implement requests with respect
                  to the Personal Data associated with the specific email
                  address that you use to send us your request; we may need to
                  verify your identity before implementing your request.
                </li>
                <li>
                  Appeal for the erasure of your Personal Data in certain
                  circumstances. Please note that there may be circumstances
                  where we are legally entitled to retain it.
                </li>
                <li>
                  Appeal for the restriction of our processing of your Personal
                  Data in certain circumstances. Please note that there may be
                  circumstances where we are legally entitled to retain it.
                </li>
                <li>
                  Evaluate the Data we process on your behalf - access will be
                  provided in line with legal obligations.
                </li>
              </ul>
              <p>
                Your request will require processing and your specific concerns
                should be submitted to{" "}
                <a
                  href="mailto:amaanahsoft@gmail.com"
                  className="text-primary underline"
                >
                  amaanahsoft@gmail.com
                </a>
                . Furthermore, you are legally entitled to appeal your dispute
                with the Information Commissioner’s Office.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">
                Processing the Personal Data of Minors
              </h2>
              <p>
                Our Services are not open to minors under the age of 16. In the
                case that you are aware of or reasonably suspect that a child
                under the age of 16 has provided their Data, please notify us so
                that we may delete that information from our databases.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">
                Changes to the Privacy Policy
              </h2>
              <p>
                This Privacy Policy does not affect any other contract with us
                and is open to occasional revision. All revisions we make to our
                Privacy Policy will be posted on this website and emailed to you
                when necessary.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">How to contact us</h2>
              <p>
                Please contact our office if you have any further enquiries
                regarding the processing of your Data at the address below:
              </p>
              <address className="not-italic">
                Amaanah EPOS <br />
                48 -50 St Augustine’s St, Norwich NR3 3AD
              </address>
              <p>
                Amaanah EPOS will investigate and attempt to resolve any doubts
                and grievances regarding the use of personal data by referencing
                the privacy policies stated in this policy.
              </p>

              <Separator />

              <h2 className="text-xl font-semibold">Anti-Slavery Statement</h2>
              <p>
                Amaanah EPOS does not condone or tolerate any involvement of
                modern slavery in our company or supply chain. We will continue
                to strive to eradicate any such individuals or institutions that
                subject workers to modern slavery within any part of our company
                or supply chain.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tac">
          <Card className="shadow-lg max-w-4xl mx-auto bg-transparent border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                The following Terms & Conditions pertain to your use of
                <a
                  className="underline text-yellow-500"
                  href="www.amaanahepos.co.uk"
                >
                  {" "}
                  www.amaanahepos.co.uk
                </a>{" "}
                and the services provided thereof. Your use of this site
                indicates your agreement to these terms and that you will
                conduct yourself appropriately. These terms do not affect any
                other contract with us and is open to occasional revision. All
                revisions we make to our Terms & Conditions will be posted on
                this website and emailed to you when necessary.
              </p>

              <Separator />

              <h3 className="font-semibold">Access</h3>
              <p>
                You do not need to be identified or provide your details to
                browse this site. However, some areas and all paid services will
                be restricted to registered users. We are not liable to any
                repercussions should this site be unavailable at any point of
                time.
              </p>

              <Separator />

              <h3 className="font-semibold">Security</h3>
              <p>
                We are liable to taking security measures to protect your
                details on our systems, however, your passwords, user
                identification codes etc. are your responsibility. Such details
                should not be disclosed to third-parties. We also reserve the
                right to disable your registered account in cases of misuse and
                failing to comply with the terms laid out in this document.
              </p>

              <Separator />

              <h3 className="font-semibold">Data Use</h3>
              <p>
                Your use of this site warrants the collection of your data for
                legitimate purposes in a manner that is legally binding. You can
                read our privacy policy here.
              </p>

              <Separator />

              <h3 className="font-semibold">Site Information</h3>
              <p>
                The site, its content and our services will undergo occasional
                revision. Any information displayed at any time has the
                possibility of being outdated or inaccurate. There is no
                guarantee to the information provided and we are not required to
                correct our site.
              </p>

              <Separator />

              <h3 className="font-semibold">Affiliate Links</h3>
              <p>
                Any links provided are for your aid and convenience. We bear no
                responsibility for the actions or information displayed on these
                third-party sites, or any damages that may occur thereof.
              </p>

              <Separator />

              <h3 className="font-semibold">Prohibitions</h3>
              <p>
                You must not use the site for anything that is not explicitly
                made available to you as the user, or reuse, resell or reproduce
                the materials within it.
              </p>

              <Separator />

              <h3 className="font-semibold">Malware</h3>
              <p>
                You must not willingly introduce any malware (viruses, hacking
                links and various cyberattacks) onto our site or attempt in any
                way to interfere with our networks, databases or any webpages
                within our domain. This is recognised as a criminal offence
                within the Computer Misuse Act 1990.
              </p>

              <Separator />

              <h3 className="font-semibold">Rights to Intellectual Property</h3>
              <p>
                The contents of this site are copyrighted as our Intellectual
                Property, and you may not duplicate these materials for public
                or for-profit use. You must not take any text or graphics out of
                their context, and you must not modify said material. However,
                you may download or print off materials for your personal
                convenience.
              </p>

              <Separator />

              <h3 className="font-semibold">Repercussions</h3>
              <p>
                On breach of these terms and conditions, we are entitled to
                immediate action, temporary or permanent. We may:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Withdraw your access to the site</li>
                <li>Disable your account</li>
                <li>
                  Legally press charges for any damages or losses incurred
                </li>
                <li>
                  Disclose any information necessary to the law enforcement
                </li>
              </ul>

              <Separator />

              <h3 className="font-semibold">Our Responsibilities</h3>
              <p>
                We are not liable for any damages faced by yourself that are
                consequential or inconsequential to your use of the site and the
                information displayed on it, including the loss of actual or
                anticipated income or savings. This is regardless of occurrence,
                foreseen or unforeseen, due to negligence or breach of contract.
              </p>
              <p>However, we are fully liable for:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  any physical harm or fatalities caused by our incompetence;
                </li>
                <li>
                  any fraud or fraudulent misrepresentation committed through
                  our site
                </li>
                <li>
                  any liabilities that cannot be excluded in accordance with the
                  appropriate legislation.
                </li>
              </ul>

              <Separator />

              <h3 className="font-semibold">Legality</h3>
              <p>
                These terms and conditions are outlined in accordance with the
                legislation in England and Wales, and the data security laws of
                the European Economic Area. The appropriate governing bodies of
                England and Wales are to oversee any disputes to arise from the
                conditions or breaches of this contract.
              </p>

              <p>We thank you for your cooperation.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
}
