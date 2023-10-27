using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Teste_Tsistemas.Data;
using Teste_Tsistemas.Models;

namespace Teste_Tsistemas.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LancamentoController : ControllerBase
    {
        private readonly AppDbContext _contexto;

        public LancamentoController(AppDbContext contexto)
        {
            _contexto = contexto;
        }

        [HttpGet("listarTodosLancamentos")]
        public async Task<ActionResult<IEnumerable<Lancamento>>> ListarTodosLancamentos()
        {
            var lancamentos = await _contexto.Lancamentos.ToListAsync();

            if (lancamentos == null || lancamentos.Count == 0)
            {
                Console.Write("Nenhum lançamento encontrado");
            }

            return lancamentos;
        }

        [HttpGet("buscarLancamentoPorID/{id}")]
        public async Task<ActionResult<Lancamento>> BuscarLancamentoPorID(int id)
        {
            var lancamentoID = await _contexto.Lancamentos.FirstOrDefaultAsync(l => l.Id == id);

            if (lancamentoID == null)
            {
                return NotFound("Lançamento não encontrado");
            }

            return lancamentoID;
        }

        [HttpPost("InserirLançamento")]
        public async Task<ActionResult<Lancamento>> InserirLancamento(
            [FromBody] Lancamento lancamento
        )
        {
            await _contexto.Lancamentos.AddAsync(lancamento);
            await _contexto.SaveChangesAsync();

            return lancamento;
        }

        [HttpPut("AtualizarLancamento/{id}")]
        public async Task<ActionResult<Lancamento>> AtualizarLancamento(
            int id,
            [FromBody] Lancamento lancamentoAtualizado
        )
        {
            if (lancamentoAtualizado == null)
            {
                return BadRequest("Dados de lançamento inválidos");
            }

            var lancamentoExistente = await _contexto.Lancamentos.FirstOrDefaultAsync(
                l => l.Id == id
            );

            if (lancamentoExistente == null)
            {
                return NotFound("Lançamento não encontrado");
            }

            if (!string.IsNullOrEmpty(lancamentoAtualizado.Descricao))
            {
                lancamentoExistente.Descricao = lancamentoAtualizado.Descricao;
            }

            if (lancamentoAtualizado.Valor != 0)
            {
                lancamentoExistente.Valor = lancamentoAtualizado.Valor;
            }

            if (lancamentoAtualizado.Status != lancamentoExistente.Status)
            {
                lancamentoExistente.Status = lancamentoAtualizado.Status;
            }

            if (lancamentoAtualizado.Avulso != lancamentoExistente.Avulso)
            {
                lancamentoExistente.Avulso = lancamentoAtualizado.Avulso;
            }

            try
            {
                await _contexto.SaveChangesAsync();
                return lancamentoExistente;
            }
            catch (DbUpdateException)
            {
                return StatusCode(500, "Erro ao atualizar o lançamento");
            }
        }

        [HttpDelete("DeletarLancamento/{id}")]
        public async Task<ActionResult> DeletarLancamento(int id)
        {
            var lancamentoExistente = await _contexto.Lancamentos.FirstOrDefaultAsync(
                l => l.Id == id
            );

            if (lancamentoExistente == null)
            {
                return NotFound("Lançamento não encontrado");
            }

            _contexto.Lancamentos.Remove(lancamentoExistente);
            await _contexto.SaveChangesAsync();
            return Ok();
        }


        [HttpGet("TotalLancamentos")]
        public async Task<ActionResult<double>> CalcularTotalLancamentos()
        {
            var total = await _contexto.Lancamentos
                .Where(l => l.Status == true)
                .SumAsync(l => l.Valor);

            return total;
        }

        [HttpPost("InserirLancamentoNaoAvulso")]
        public async Task<ActionResult<Lancamento>> InserirLancamentoNaoAvulso(
            [FromBody] Lancamento lancamento
        )
        {
            if (lancamento == null)
            {
                return BadRequest("Dados de lançamento inválidos");
            }



            lancamento.Avulso = false;

            await _contexto.Lancamentos.AddAsync(lancamento);
            await _contexto.SaveChangesAsync();

            return lancamento;
        }
    }
}
