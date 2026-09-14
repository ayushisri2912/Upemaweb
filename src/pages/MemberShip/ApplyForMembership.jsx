// src/pages/MemberShip/ApplyForMembership.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import {
  FiUser, FiMail, FiPhone, FiHome, FiMapPin, FiArrowRight,
  FiBriefcase, FiCalendar, FiGlobe, FiFileText, FiCreditCard,
  FiUsers, FiCheckSquare, FiAward
} from 'react-icons/fi';

/* ---------------- STATIC LISTS ---------------- */

const districtsList = [
  'Lucknow', 'Kanpur Nagar', 'Agra', 'Varanasi',
  'Gautam Buddha Nagar (Noida)', 'Ghaziabad', 'Prayagraj',
  'Gorakhpur', 'Bareilly', 'Aligarh', 'Meerut', 'Jhansi',
  'Ayodhya', 'Mathura', 'Moradabad', 'Saharanpur',
  'Muzaffarnagar', 'Other UP District'
];

const designationList = [
  'Proprietor', 'Partner', 'Director', 'Manager', 'Other'
];

const businessTypeList = [
  'Event Management',
  'Wedding Planning & Decor',
  'Exhibition / Trade Shows',
  'Tent, Fabrication & Infrastructure',
  'Sound / Light / AV',
  'Artist & Talent Management',
  'Printing & Branding',
  'Other'
];

const natureOfOperationsList = [
  'Corporate Events',
  'Government Events',
  'Weddings & Social Events',
  'Exhibitions / Trade Fairs',
  'Concerts / Live Shows',
  'Rentals / Infrastructure'
];

const experienceList = [
  '1-3 Years', '3-5 Years', '5-10 Years', '10+ Years'
];

const membershipTypesList = [
  { label: 'Platinum (Turn Over 50+ Cr) - ₹15,000/-', value: 'Platinum' },
  { label: 'Gold (Turn Over 30+ Cr) - ₹11,000/-', value: 'Gold' },
  { label: 'Associate / Vendor Member - ₹7,500/-', value: 'Associate' }
];

/* ---------------- VALIDATION HELPERS ---------------- */

const validators = {
  required: (v) => (!v || (typeof v === 'string' && !v.trim())) ? 'This field is required' : '',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address',
  mobile: (v) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, '').slice(-10)) ? '' : 'Enter a valid 10-digit mobile number',
  altMobile: (v) => (!v ? '' : (/^[6-9]\d{9}$/.test(v.replace(/\D/g, '').slice(-10)) ? '' : 'Enter a valid 10-digit mobile number')),
  pin: (v) => /^\d{6}$/.test(v) ? '' : 'Enter a valid 6-digit PIN code',
  gst: (v) => /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(v.toUpperCase()) ? '' : 'Enter a valid 15-character GST number',
  pan: (v) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(v.toUpperCase()) ? '' : 'Enter a valid 10-character PAN number',
  aadhaar: (v) => /^\d{12}$/.test(v.replace(/\s/g, '')) ? '' : 'Enter a valid 12-digit Aadhaar number',
  year: (v) => {
    const y = parseInt(v, 10);
    const curr = new Date().getFullYear();
    return (y >= 1950 && y <= curr) ? '' : `Enter a year between 1950 and ${curr}`;
  },
  website: (v) => (!v ? '' : (/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/.test(v) ? '' : 'Enter a valid URL')),
  name: (v) => /^[a-zA-Z\s.'-]{3,}$/.test(v.trim()) ? '' : 'Enter a valid name (min 3 characters)',
};

/* ---------------- MAIN COMPONENT ---------------- */

const ApplyForMembership = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // 1. Applicant Information
    fullName: '',
    designation: 'Proprietor',
    designationOther: '',
    companyName: '',
    businessType: 'Event Management',
    businessTypeOther: '',
    yearOfEstablishment: '',

    // 2. Contact Details
    address: '',
    city: '',
    state: 'Uttar Pradesh',
    pin: '',
    mobile: '',
    altMobile: '',
    email: '',
    website: '',

    // 3. Business & Legal
    gstNumber: '',
    panNumber: '',
    aadhaarNumber: '',
    natureOfOperations: [], // multi-select
    experience: '1-3 Years',

    // 4. Membership Category
    membershipType: 'Platinum',

    // 5. Industry References
    ref1Name: '',
    ref1Organization: '',
    ref1Mobile: '',
    ref2Name: '',
    ref2Organization: '',
    ref2Mobile: '',

    // 6. Documents
    documents: [], // multi-select

    // 7. Declaration
    declarationAccepted: false,
    place: '',
    date: new Date().toISOString().split('T')[0],
    paymentProofAttached: false,

    // Extra
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ---------- Handlers ---------- */

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => {
      const updated = { ...prev, [name]: finalValue };

      // Reset "Other" text when select changes away from Other
      if (name === 'designation' && value !== 'Other') updated.designationOther = '';
      if (name === 'businessType' && value !== 'Other') updated.businessTypeOther = '';

      return updated;
    });

    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value]
      };
    });
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleDocumentToggle = (doc) => {
    setFormData((prev) => ({
      ...prev,
      documents: prev.documents.includes(doc)
        ? prev.documents.filter((d) => d !== doc)
        : [...prev.documents, doc]
    }));
  };

  /* ---------- Validation ---------- */

  const validateForm = () => {
    const e = {};

    // 1. Applicant
    e.fullName = validators.name(formData.fullName) || validators.required(formData.fullName);
    e.companyName = validators.required(formData.companyName);
    e.yearOfEstablishment = validators.year(formData.yearOfEstablishment);
    if (formData.designation === 'Other' && !formData.designationOther.trim())
      e.designationOther = 'Please specify your designation';
    if (formData.businessType === 'Other' && !formData.businessTypeOther.trim())
      e.businessTypeOther = 'Please specify your business type';

    // 2. Contact
    e.address = validators.required(formData.address);
    e.city = validators.required(formData.city);
    e.state = validators.required(formData.state);
    e.pin = validators.pin(formData.pin);
    e.mobile = validators.mobile(formData.mobile);
    e.altMobile = validators.altMobile(formData.altMobile);
    e.email = validators.email(formData.email);
    e.website = validators.website(formData.website);

    // 3. Business & Legal
    e.gstNumber = validators.gst(formData.gstNumber);
    e.panNumber = validators.pan(formData.panNumber);
    e.aadhaarNumber = validators.aadhaar(formData.aadhaarNumber);
    if (!formData.natureOfOperations.length)
      e.natureOfOperations = 'Select at least one nature of operation';
    e.experience = validators.required(formData.experience);

    // 4. Membership
    e.membershipType = validators.required(formData.membershipType);

    // 5. References (Mandatory)
    e.ref1Name = validators.name(formData.ref1Name) || validators.required(formData.ref1Name);
    e.ref1Organization = validators.required(formData.ref1Organization);
    e.ref1Mobile = validators.mobile(formData.ref1Mobile);

    e.ref2Name = validators.name(formData.ref2Name) || validators.required(formData.ref2Name);
    e.ref2Organization = validators.required(formData.ref2Organization);
    e.ref2Mobile = validators.mobile(formData.ref2Mobile);

    // 6. Documents
    if (formData.documents.length < 1)
      e.documents = 'Select at least one document you will enclose';

    // 7. Declaration
    if (!formData.declarationAccepted)
      e.declarationAccepted = 'You must accept the declaration to proceed';
    e.place = validators.required(formData.place);
    e.date = validators.required(formData.date);
    if (!formData.paymentProofAttached)
      e.paymentProofAttached = 'Please confirm payment proof attachment';

    // Remove empty string errors
    Object.keys(e).forEach((k) => { if (!e[k]) delete e[k]; });

    setErrors(e);

    // Scroll to first error
    if (Object.keys(e).length) {
      const first = document.querySelector(`[name="${Object.keys(e)[0]}"]`);
      if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return Object.keys(e).length === 0;
  };

  /* ---------- Submit ---------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Please fix the highlighted errors',
        text: 'Some required fields are missing or invalid.',
        confirmButtonColor: '#0F2747'
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        html: `
          <div style="text-align: left; font-size: 14px; color: #475569; line-height: 1.6;">
            <p>Thank you <strong>${formData.fullName}</strong>. Your <strong>${formData.membershipType}</strong> membership application for <strong>${formData.companyName}</strong> has been received.</p>
            <br/>
            <p style="background: #F0F6FB; padding: 12px; border-radius: 8px; border-left: 4px solid #1279CF;">
              Our team will review your application and contact you via <strong>${formData.email}</strong>. Please keep your documents ready for verification.
            </p>
          </div>
        `,
        confirmButtonText: 'Return to Membership Page',
        confirmButtonColor: '#0F2747'
      }).then(() => navigate('/membership'));
    }, 1200);
  };

  /* ---------- Reusable Field Components ---------- */

  const inputClass = (field) =>
    `w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:ring-2 focus:outline-none transition-all ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
        : 'border-slate-200 focus:border-[#1279CF] focus:ring-[#1279CF]/20'
    }`;

  const selectClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:ring-2 focus:outline-none transition-all cursor-pointer ${
      errors[field]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
        : 'border-slate-200 focus:border-[#1279CF] focus:ring-[#1279CF]/20'
    }`;

  const Label = ({ children, required }) => (
    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );

  const ErrorMsg = ({ field }) =>
    errors[field] ? (
      <p className="text-xs text-red-500 mt-1 font-medium">{errors[field]}</p>
    ) : null;

  const SectionTitle = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200">
      <div className="w-9 h-9 rounded-lg bg-[#0F2747]/5 flex items-center justify-center text-[#1279CF]">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h2 className="text-base sm:text-lg font-bold text-[#0D2238]">{title}</h2>
        {subtitle && <p className="text-xs text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );

  /* ---------- RENDER ---------- */

  return (
    <div className="bg-slate-50 font-sans min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-slate-900 selection:bg-[#C9A45C] selection:text-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1279CF] text-xs font-semibold tracking-wider uppercase mb-3 shadow-sm">
            <span>🏛️ UPEMA ACCREDITATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0D2238] tracking-tight">
            Membership Registration Form
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-2 leading-relaxed">
            Uttar Pradesh Event Management Association (UPEMA) — Registered Industry Body of Event & Exhibition Professionals.
            Fill in all details carefully. Fields marked <span className="text-red-500">*</span> are mandatory.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-slate-200/80 shadow-xl p-6 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-10" noValidate>

            {/* ============ 1. APPLICANT INFORMATION ============ */}
            <section>
              <SectionTitle icon={FiUser} title="1. Applicant Information" subtitle="As per PAN / Aadhaar" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                <div className="sm:col-span-2">
                  <Label required>Full Name (As per PAN/Aadhaar)</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiUser className="w-4 h-4" />
                    </div>
                    <input
                      type="text" name="fullName" value={formData.fullName}
                      onChange={handleInputChange} placeholder="Enter your full name"
                      className={inputClass('fullName')}
                    />
                  </div>
                  <ErrorMsg field="fullName" />
                </div>

                <div>
                  <Label required>Designation</Label>
                  <select name="designation" value={formData.designation}
                    onChange={handleInputChange} className={selectClass('designation')}>
                    {designationList.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                {formData.designation === 'Other' && (
                  <div>
                    <Label required>Specify Designation</Label>
                    <input
                      type="text" name="designationOther" value={formData.designationOther}
                      onChange={handleInputChange} placeholder="Enter your designation"
                      className={inputClass('designationOther')}
                    />
                    <ErrorMsg field="designationOther" />
                  </div>
                )}

                <div className={formData.designation === 'Other' ? '' : 'sm:col-span-2'}>
                  <Label required>Organization / Firm / Company Name</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiHome className="w-4 h-4" />
                    </div>
                    <input
                      type="text" name="companyName" value={formData.companyName}
                      onChange={handleInputChange} placeholder="Enter company / firm name"
                      className={inputClass('companyName')}
                    />
                  </div>
                  <ErrorMsg field="companyName" />
                </div>

                <div>
                  <Label required>Type of Business</Label>
                  <select name="businessType" value={formData.businessType}
                    onChange={handleInputChange} className={selectClass('businessType')}>
                    {businessTypeList.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                {formData.businessType === 'Other' && (
                  <div>
                    <Label required>Specify Business Type</Label>
                    <input
                      type="text" name="businessTypeOther" value={formData.businessTypeOther}
                      onChange={handleInputChange} placeholder="Enter your business type"
                      className={inputClass('businessTypeOther')}
                    />
                    <ErrorMsg field="businessTypeOther" />
                  </div>
                )}

                <div>
                  <Label required>Year of Establishment</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiCalendar className="w-4 h-4" />
                    </div>
                    <input
                      type="number" name="yearOfEstablishment" min="1950"
                      max={new Date().getFullYear()} value={formData.yearOfEstablishment}
                      onChange={handleInputChange} placeholder="e.g. 2015"
                      className={inputClass('yearOfEstablishment')}
                    />
                  </div>
                  <ErrorMsg field="yearOfEstablishment" />
                </div>

              </div>
            </section>

            {/* ============ 2. CONTACT DETAILS ============ */}
            <section>
              <SectionTitle icon={FiMapPin} title="2. Contact Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                <div className="sm:col-span-2">
                  <Label required>Registered Office Address</Label>
                  <textarea name="address" rows="3" value={formData.address}
                    onChange={handleInputChange} placeholder="Enter complete registered office address..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-slate-50/50 focus:bg-white focus:ring-2 focus:outline-none transition-all resize-none ${
                      errors.address ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-slate-200 focus:border-[#1279CF] focus:ring-[#1279CF]/20'
                    }`}
                  />
                  <ErrorMsg field="address" />
                </div>

                <div>
                  <Label required>City</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiMapPin className="w-4 h-4" />
                    </div>
                    <input type="text" name="city" value={formData.city}
                      onChange={handleInputChange} placeholder="City"
                      className={inputClass('city')} />
                  </div>
                  <ErrorMsg field="city" />
                </div>

                <div>
                  <Label required>State</Label>
                  <select name="state" value={formData.state}
                    onChange={handleInputChange} className={selectClass('state')}>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <Label required>PIN Code</Label>
                  <input type="text" name="pin" maxLength="6" value={formData.pin}
                    onChange={handleInputChange} placeholder="6-digit PIN"
                    className={inputClass('pin')} />
                  <ErrorMsg field="pin" />
                </div>

                <div>
                  <Label required>Mobile No.</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiPhone className="w-4 h-4" />
                    </div>
                    <input type="tel" name="mobile" value={formData.mobile}
                      onChange={handleInputChange} placeholder="10-digit mobile number"
                      className={inputClass('mobile')} />
                  </div>
                  <ErrorMsg field="mobile" />
                </div>

                <div>
                  <Label>Alternate Contact No.</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiPhone className="w-4 h-4" />
                    </div>
                    <input type="tel" name="altMobile" value={formData.altMobile}
                      onChange={handleInputChange} placeholder="Optional alternate number"
                      className={inputClass('altMobile')} />
                  </div>
                  <ErrorMsg field="altMobile" />
                </div>

                <div>
                  <Label required>Official Email ID</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiMail className="w-4 h-4" />
                    </div>
                    <input type="email" name="email" value={formData.email}
                      onChange={handleInputChange} placeholder="name@company.com"
                      className={inputClass('email')} />
                  </div>
                  <ErrorMsg field="email" />
                </div>

                <div>
                  <Label>Website / Social Media</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiGlobe className="w-4 h-4" />
                    </div>
                    <input type="text" name="website" value={formData.website}
                      onChange={handleInputChange} placeholder="https://example.com"
                      className={inputClass('website')} />
                  </div>
                  <ErrorMsg field="website" />
                </div>

              </div>
            </section>

            {/* ============ 3. BUSINESS & LEGAL DETAILS ============ */}
            <section>
              <SectionTitle icon={FiFileText} title="3. Business & Legal Details" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                <div>
                  <Label required>GST Number</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiCreditCard className="w-4 h-4" />
                    </div>
                    <input type="text" name="gstNumber" maxLength="15" value={formData.gstNumber}
                      onChange={handleInputChange} placeholder="22AAAAA0000A1Z5"
                      className={`${inputClass('gstNumber')} uppercase`} />
                  </div>
                  <ErrorMsg field="gstNumber" />
                </div>

                <div>
                  <Label required>PAN Number</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <FiCreditCard className="w-4 h-4" />
                    </div>
                    <input type="text" name="panNumber" maxLength="10" value={formData.panNumber}
                      onChange={handleInputChange} placeholder="ABCDE1234F"
                      className={`${inputClass('panNumber')} uppercase`} />
                  </div>
                  <ErrorMsg field="panNumber" />
                </div>

                <div className="sm:col-span-2">
                  <Label required>Aadhaar Number (Applicant)</Label>
                  <input type="text" name="aadhaarNumber" maxLength="12" value={formData.aadhaarNumber}
                    onChange={handleInputChange} placeholder="12-digit Aadhaar number"
                    className={inputClass('aadhaarNumber')} />
                  <ErrorMsg field="aadhaarNumber" />
                </div>

                {/* Nature of Operations — multi-select */}
                <div className="sm:col-span-2">
                  <Label required>Nature of Operations (Tick all applicable)</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {natureOfOperationsList.map((op) => {
                      const active = formData.natureOfOperations.includes(op);
                      return (
                        <button
                          type="button" key={op}
                          onClick={() => handleMultiSelect('natureOfOperations', op)}
                          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium text-left transition-all ${
                            active
                              ? 'border-[#1279CF] bg-[#1279CF]/5 text-[#0D2238]'
                              : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                            active ? 'bg-[#1279CF] border-[#1279CF]' : 'border-slate-300'
                          }`}>
                            {active && <FiCheckSquare className="w-3 h-3 text-white" />}
                          </span>
                          {op}
                        </button>
                      );
                    })}
                  </div>
                  <ErrorMsg field="natureOfOperations" />
                </div>

                <div className="sm:col-span-2">
                  <Label required>Total Experience in Event Industry</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {experienceList.map((exp) => {
                      const active = formData.experience === exp;
                      return (
                        <button
                          type="button" key={exp}
                          onClick={() => setFormData((p) => ({ ...p, experience: exp }))}
                          className={`px-3 py-2.5 rounded-lg border text-xs sm:text-sm font-semibold transition-all ${
                            active
                              ? 'border-[#1279CF] bg-[#1279CF]/5 text-[#0D2238]'
                              : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {exp}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </section>

            {/* ============ 4. MEMBERSHIP CATEGORY ============ */}
            <section>
              <SectionTitle icon={FiAward} title="4. Membership Category" subtitle="Select the membership type you wish to apply for" />
              <div className="space-y-3">
                {membershipTypesList.map((m) => {
                  const active = formData.membershipType === m.value;
                  return (
                    <button
                      type="button" key={m.value}
                      onClick={() => setFormData((p) => ({ ...p, membershipType: m.value }))}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all ${
                        active
                          ? 'border-[#C9A45C] bg-[#C9A45C]/5 shadow-sm'
                          : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        active ? 'border-[#C9A45C]' : 'border-slate-300'
                      }`}>
                        {active && <span className="w-2.5 h-2.5 rounded-full bg-[#C9A45C]" />}
                      </span>
                      <span className={`text-sm font-semibold ${active ? 'text-[#0D2238]' : 'text-slate-700'}`}>
                        {m.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ============ 5. INDUSTRY REFERENCES ============ */}
            <section>
              <SectionTitle icon={FiUsers} title="5. Industry References" subtitle="Two references are mandatory" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                {/* Reference 1 */}
                <div className="sm:col-span-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1279CF] mb-3">
                    Reference 1
                  </p>
                </div>
                <div>
                  <Label required>Name</Label>
                  <input type="text" name="ref1Name" value={formData.ref1Name}
                    onChange={handleInputChange} placeholder="Reference 1 full name"
                    className={inputClass('ref1Name')} />
                  <ErrorMsg field="ref1Name" />
                </div>
                <div>
                  <Label required>Organization</Label>
                  <input type="text" name="ref1Organization" value={formData.ref1Organization}
                    onChange={handleInputChange} placeholder="Reference 1 organization"
                    className={inputClass('ref1Organization')} />
                  <ErrorMsg field="ref1Organization" />
                </div>
                <div className="sm:col-span-2">
                  <Label required>Mobile No.</Label>
                  <input type="tel" name="ref1Mobile" value={formData.ref1Mobile}
                    onChange={handleInputChange} placeholder="10-digit mobile number"
                    className={inputClass('ref1Mobile')} />
                  <ErrorMsg field="ref1Mobile" />
                </div>

                {/* Reference 2 */}
                <div className="sm:col-span-2 pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1279CF] mb-3">
                    Reference 2
                  </p>
                </div>
                <div>
                  <Label required>Name</Label>
                  <input type="text" name="ref2Name" value={formData.ref2Name}
                    onChange={handleInputChange} placeholder="Reference 2 full name"
                    className={inputClass('ref2Name')} />
                  <ErrorMsg field="ref2Name" />
                </div>
                <div>
                  <Label required>Organization</Label>
                  <input type="text" name="ref2Organization" value={formData.ref2Organization}
                    onChange={handleInputChange} placeholder="Reference 2 organization"
                    className={inputClass('ref2Organization')} />
                  <ErrorMsg field="ref2Organization" />
                </div>
                <div className="sm:col-span-2">
                  <Label required>Mobile No.</Label>
                  <input type="tel" name="ref2Mobile" value={formData.ref2Mobile}
                    onChange={handleInputChange} placeholder="10-digit mobile number"
                    className={inputClass('ref2Mobile')} />
                  <ErrorMsg field="ref2Mobile" />
                </div>

              </div>
            </section>

            {/* ============ 6. DOCUMENTS ENCLOSED ============ */}
            <section>
              <SectionTitle icon={FiCheckSquare} title="6. Documents Enclosed" subtitle="Select documents you will submit (self-attested copies)" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Aadhaar Card', 'PAN Card', 'GST Registration Certificate',
                  'Visiting Card / Company Profile', 'Company Registration Certificate',
                  'Passport Size Photograph'
                ].map((doc) => {
                  const active = formData.documents.includes(doc);
                  return (
                    <button
                      type="button" key={doc}
                      onClick={() => handleDocumentToggle(doc)}
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all ${
                        active
                          ? 'border-[#1279CF] bg-[#1279CF]/5 text-[#0D2238]'
                          : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                        active ? 'bg-[#1279CF] border-[#1279CF]' : 'border-slate-300'
                      }`}>
                        {active && <FiCheckSquare className="w-3 h-3 text-white" />}
                      </span>
                      {doc}
                    </button>
                  );
                })}
              </div>
              <ErrorMsg field="documents" />
            </section>

            {/* ============ 7. DECLARATION & UNDERTAKING ============ */}
            <section>
              <SectionTitle icon={FiFileText} title="7. Declaration & Undertaking" />
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                <p>
                  I, <strong className="text-slate-900">{formData.fullName || '________________'}</strong>, hereby declare that all information furnished above is true and correct to the best of my knowledge and belief. I agree to abide by the rules, regulations, code of conduct, and decisions of Uttar Pradesh Event Management Association (UPEMA).
                </p>
                <p className="font-semibold text-slate-700">I understand that:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Membership is subject to approval by the UPEMA Governing Body/Core Committee.</li>
                  <li>UPEMA reserves the right to suspend or terminate membership in case of misconduct, misrepresentation, or violation of association rules.</li>
                  <li>Membership fees once paid are non-refundable.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mt-5">
                <div>
                  <Label required>Place</Label>
                  <input type="text" name="place" value={formData.place}
                    onChange={handleInputChange} placeholder="e.g. Lucknow"
                    className={inputClass('place')} />
                  <ErrorMsg field="place" />
                </div>
                <div>
                  <Label required>Date</Label>
                  <input type="date" name="date" value={formData.date}
                    onChange={handleInputChange}
                    className={inputClass('date')} />
                  <ErrorMsg field="date" />
                </div>
              </div>

              {/* Payment proof */}
              <div className="mt-5">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox" name="paymentProofAttached"
                    checked={formData.paymentProofAttached}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#1279CF] focus:ring-[#1279CF] cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 leading-normal">
                    I have attached the copy of payment proof (Account No: <strong>44720831790</strong>, IFSC: <strong>SBIN0016726</strong>).
                  </span>
                </label>
                <ErrorMsg field="paymentProofAttached" />
              </div>

              {/* Declaration acceptance */}
              <div className="mt-4">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox" name="declarationAccepted"
                    checked={formData.declarationAccepted}
                    onChange={handleInputChange}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#1279CF] focus:ring-[#1279CF] cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 leading-normal">
                    I accept the above declaration & undertake to abide by UPEMA's rules and code of conduct. <span className="text-red-500">*</span>
                  </span>
                </label>
                <ErrorMsg field="declarationAccepted" />
              </div>
            </section>

            {/* ============ MESSAGE (OPTIONAL) ============ */}
            <section>
              <Label>Message <span className="text-slate-400 font-normal">(Optional)</span></Label>
              <textarea name="message" rows="3" value={formData.message}
                onChange={handleInputChange} placeholder="Any additional information or comments..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:border-[#1279CF] focus:ring-2 focus:ring-[#1279CF]/20 focus:outline-none transition-all resize-none"
              />
            </section>

            {/* ============ SUBMIT ============ */}
            <div className="pt-2">
              <button
                type="submit" disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4A359] via-[#C2934A] to-[#B5833B] hover:from-[#e2b56e] hover:to-[#a0732e] text-[#071322] font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-98 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <FiArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-xs text-slate-500 text-center mt-3">
                Our team will review your application and contact you shortly.
              </p>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyForMembership;