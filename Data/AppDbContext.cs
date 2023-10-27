using Microsoft.EntityFrameworkCore;
using Teste_Tsistemas.Models;

namespace Teste_Tsistemas.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<Lancamento> Lancamentos { get; set; }

       
    }
}
