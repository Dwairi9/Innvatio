using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Domain.Common
{
    public static class LookupEnum 
    {
        public static string Value(this Enum lookup)
        {
            var val = lookup.ToString();
            var fi = lookup.GetType().GetField(val);
            var attributes = (ValAttribute[])fi.GetCustomAttributes(typeof(ValAttribute), false);

            if (attributes != null && attributes.Length > 0)
            {
                val = attributes[0].value;
            }

            return val;
        }

        public static string Description(this Enum lookup)
        {
            var val = lookup.ToString();
            var fi = lookup.GetType().GetField(val);
            var attributes = (DescriptionAttribute[])fi.GetCustomAttributes(typeof(DescriptionAttribute), false);
            
            if (attributes != null && attributes.Length > 0)
            {
                val = attributes[0].Description;
            }

            return val;
        }
    }

    [AttributeUsage(AttributeTargets.All, Inherited = false)]
    public class ValAttribute : Attribute
    {
        public ValAttribute(string Value)
        {
            value = Value;
        }

        public string value { get; set; } 
    }

    public enum AttachmentType 
    {
        [Description("Resident Card/Identity Card"), Val("ID_01")]
        IdentityCard = 1,
        [Description("Passport"), Val("PP_02")]
        Passport = 2,
        [Description("Salary Letter"), Val("SL_04")]
        SalaryLetter = 3,
        [Description("Salary Assignment/Certificates"), Val("SAC_03")]
        SalaryAssignment = 4
    } 
}
