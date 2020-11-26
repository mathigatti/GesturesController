from flask import Flask
from flask import render_template
from FoxDot import *

app = Flask(__name__)
last_rules = []
running_now = set([])

def intro():
    m2 >> gong(var([p2.pitch],4), dur=1/4, pan=linvar([-1,1],4), amp=linvar([0,2],8)).sometimes('stutter', 4)
    d2 >> play('w' ,dur=PSum([1,6],4), rate=1/4)
    d3 >> play('K', dur=2, sample=3)

def softdrums(hpff=250):
    sust=0.02
    hh >> play('------(-=)--(-=)--(-=)---',dur=1/4,amp=[1,0.3],sus=sust,hpf=hpff,sample=3)
    bd >> play('x  x   xx (x )( x)   x',dur=1/4,amp=0.3,sus=sust,hpf=hpff)
    sn >> play('    o    o  o   ',dur=1/4,amp=0.15,sus=sust,hpf=hpff)

def melody():
    hpff=250
    p1 >> glass(var([0,2],4), drive=0.3, dur=PSum(7,4),amp=0.7,pan=PWhite(-1,1)).every(4,'stutter',2,dur=1) + var([0,2],8)
    c1 >> glass([0],oct=4)

def note2index(note):
    scale = list(Scale.default)
    return scale[note]

def play2notes(notas,sample="b",dur=1,ritmo=8,oct=0,player=p1):
    rates = []
    for nota in notas:
        nota = note2index(nota)
        rates.append(math.pow(2,(nota+12*oct)/12))
    player >> play(sample,dur=var(ritmo,dur), rate=var(rates,dur),amp=0.5,sample=2)

def heavydrums():
    d2.solo(0)
    play2notes([0],"Q",dur=[4],ritmo=[4],oct=-2,player=q1)

def clear():
    global last_rules, running_now
    last_rules = []
    running_now = set([])
    Clock.clear()
    Clock.bpm = 100

def faster():
    print('rock')
    Clock.bpm = int(Clock.bpm*2)

rules_functions = {"0": lambda : True, "1": intro, "2": lambda : softdrums(hpff=250), "3": heavydrums, "4": melody, "5": clear, "rock": faster}

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/gesture/<code>')
def gesture(code):
    global last_rules, running_now

    last_rules.append(code)
    last_rules = last_rules[-10:]
    print(last_rules)

    if not code in running_now:
        if last_rules.count(code) > 4:
            rule_function = rules_functions[code]
            running_now.add(code)
            rule_function()

    return "ok"