using System;
using System.ComponentModel.DataAnnotations;

namespace SkillsApi
{
    public class Skill
    {
        public int ID { get; set; }

        [RequiredAttribute]
        public string Title { get; set; }
        public int Hours { get; set; }
        public bool Completed { get; set; }

        public DateTime DueDate { get; set; }

        public int SortOrder { get; set; }
    }
}