function Hero(task){
    return(
        <section>
            <div>
                <p>Complete the tasks</p>
            </div>
            <div>
                {task.completed}/{task.total}
            </div>
        </section>
    );
}

export default Hero;
