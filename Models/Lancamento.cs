using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Teste_Tsistemas.Models
{
    public class Lancamento
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(250)]
        public string Descricao { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Data { get; set; }

        [Required]
        [Range(double.MinValue, double.MaxValue, ErrorMessage = "O valor deve ser um número válido.")]
        public double Valor { get; set; }

        [Required]
        public bool Status { get; set; }

        [Required]
        public bool Avulso { get; set; }
    }
}
